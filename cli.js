const commander = require("commander");
const fs = require("fs");
const {
    exec
} = require('child_process');
const {
    clone,
    askForFileName,
    askForAdd,
    getSnakeCase
} = require('./src/index');
var path = require("path");

commander.option('new [folderName]', 'Create new project & put the content inside the specified folder').
option('start', 'start development server').
option('deploy [deploymentFolderName]', 'create build for deployment').
option('add', 'add the components').
parse(process.argv);

const errorMessageForInvalidProjectDirectory = "Seems like you are not inside project directory.Please move to project dir & run the command again";
if (commander.new) {
    const appname = typeof commander.new != "string" ? "fortjs-app" : commander.new;
    askForProjectLanguage().
    then(function (language) {
        clone(language, appname);
    });
} else {
    var content;
    try {
        content = fs.readFileSync("./package.json", {
            encoding: "utf8"
        });
    } catch (ex) {
        console.error(errorMessageForInvalidProjectDirectory);
        return;
    }
    const packageInfo = JSON.parse(content);
    if (packageInfo && packageInfo.project && packageInfo.project.framework === "fortjs") {
        if (commander.start) {
            var cmd = exec("npm run start");
            cmd.on("error", function (err) {
                console.error(err);
            })
            cmd.stdout.on('data', function (data) {
                console.log(data.toString());
            });
            cmd.stderr.on('data', function (data) {
                console.log(data.toString());
            });
            cmd.on('exit', function (code) {
                console.log('start command exited with code ' + code.toString());
            });
        } else if (commander.deploy) {
            var deployFolderName = typeof commander.deploy == "string" ? commander.deploy : "bin";
            var cmd = exec(`BUILD_FOLDER=${deployFolderName} npm run deploy`);
            cmd.on("error", function (err) {
                console.error(err);
            })
            cmd.stdout.on('data', function (data) {
                console.log(data.toString());
            });
            cmd.stderr.on('data', function (data) {
                console.log(data.toString());
            });
            cmd.on('exit', function (code) {
                if (code == 0) {
                    console.log("build created for deploy")
                } else {
                    console.log('deploy command exited with code ' + code.toString());
                }
            });
        } else if (commander.add) {
            askForAdd().
            then(function (component) {
                askForFileName().then(function (fileName) {
                    fileName = getSnakeCase(path.basename(fileName));
                    const extension = project.language == "typescript" ? "ts" : "js";
                    fs.writeFileSync(`${component}s/fileName.${extension}`, "fu", {
                        encoding: "utf-8"
                    });
                })
            });
        }
    } else {
        console.error(errorMessageForInvalidProjectDirectory);
    }
}