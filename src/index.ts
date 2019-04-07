import * as commander from "commander";
import * as fs from "fs";
import * as path from "path";
import { askForProjectLanguage } from "./ask_for_project_language";
import { clone } from "./cloner";
import { askForAdd } from "./ask_for_add";
import { askForFileName } from "./ask_for_file_name";
import { getSnakeCase } from "./get_snake_case";
import { handleDeploy, handleStart, handleFileAdd } from "./handlers";

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
    }
    const packageInfo = JSON.parse(content);
    if (packageInfo && packageInfo.project && packageInfo.project.framework === "fortjs") {
        if (commander.start) {
            handleStart();
        } else if (commander.deploy) {
            var deployFolderName = typeof commander.deploy == "string" ? commander.deploy : "bin";
            handleDeploy(deployFolderName);
        } else if (commander.add) {
            handleFileAdd(packageInfo.project.language);
        }
    } else {
        console.error(errorMessageForInvalidProjectDirectory);
    }
}