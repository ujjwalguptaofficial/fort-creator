const commander = require("commander");
const inquirer = require('inquirer');
const fs = require("fs");
const {
    execSync,
    exec,
    spawn
} = require('child_process');
const {
    clone
} = require('./src/cloner');
const {
    askForFileName
} = require('./src/ask_for_file_name');

commander.option('new [folderName]', 'Create new project & put the content inside the specified folder').
option('start', 'start development server').
option('deploy [deploymentFolderName]', 'create build for deployment').
option('add', 'add the components').
parse(process.argv);

const errorMessageForInvalidProjectDirectory = "Seems like you are not inside project directory.Please move to project dir & run the command again";
if (commander.new) {
    const appname = typeof commander.new != "string" ? "fortjs-app" : commander.new;

    const questions = [{
        name: 'project_language',
        message: "choose project language",
        type: 'list',
        choices: ["typescript", "javascript"]
    }];
    inquirer.prompt(questions).
    then(function (answers) {
        try {
            clone(answers.project_language, appname);
        } catch (err) {
            console.error(err.message);
        }
    });
} else {
    var content;
    try {
        content = fs.readFileSync("./package.json", {
            encoding: "utf8"
        });
    } catch (ex) {
        console.error(errorMessageForInvalidProjectDirectory);
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
            var questions = [{
                name: 'add_info',
                message: "what do you want to add",
                type: 'list',
                choices: ["controller", "shield", "wall", "guard"]
            }];
            inquirer.prompt(questions).
            then(function (answers) {
                console.log(answers.add_info);
                askForFileName().then(function (fileName) {
                    console.log(fileName);
                })
            });
        }
    } else {
        console.error(errorMessageForInvalidProjectDirectory);
    }
}