
import * as fs from "fs";
import { askForProjectLanguage } from "./ask_for_project_language";
import { handleDeploy, handleStart, handleFileAdd, handleClone } from "./handlers";
import * as commander from "commander";
import { pathExistsSync } from "fs-extra";
const errorMessageForInvalidProjectDirectory = "Seems like you are not inside project directory.Please move to project dir & run the command again";

export const processCommand = function (commander) {
    if (commander.new) {
        const appname = typeof commander.new != "string" ? "fortjs-app" : commander.new;
        askForProjectLanguage().
            then(function (language) {
                handleClone(language, appname);
            });
    } else {
        var content;
        try {
            const pathOfPackage = "./package.json";
            if (!pathExistsSync(pathOfPackage)) {
                console.error(errorMessageForInvalidProjectDirectory);
                return;
            }
            content = fs.readFileSync(pathOfPackage, {
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
}


commander.option('new [folderName]', 'Create new project & put the content inside the specified folder').
    option('start', 'start development server').
    option('deploy [deploymentFolderName]', 'create build for deployment').
    option('add', 'add the components').
    parse(process.argv);

processCommand(commander);