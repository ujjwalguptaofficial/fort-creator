import { askForProjectLanguage, getPackageVersion } from "./helpers";
import { handleDeploy, handleStart, handleFileAdd, handleFortJs } from "./handlers";
import * as commander from "commander";
import { pathExistsSync, readFileSync } from "fs-extra";
import { handleShivneri } from "./handlers/handle_shivneri";

const errorMessageForInvalidProjectDirectory = "Seems like you are not inside project directory.Please move to project dir & run the command again";

export const processCommand = async function (commander) {
    console.log("1")
    if (commander.new) {
        console.log("2")
        const appname = typeof commander.new != "string" ? "fort" : commander.new;
        const language = await askForProjectLanguage();
        console.log("creating projects..")
        if (language === "crystal") {
            return handleShivneri(appname);
        }
        else {
            handleFortJs(language, appname);
        }

    }
    else if (commander.add || commander.start || commander.deploy) {
        var content;
        try {
            const pathOfPackage = "./package.json";
            if (!pathExistsSync(pathOfPackage)) {
                console.error(errorMessageForInvalidProjectDirectory);
                return;
            }
            content = readFileSync(pathOfPackage, {
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
    else {
        console.log('invalid command');
    }
}


commander.version(getPackageVersion(), '-v, --version').
    option('new [folderName]', 'Create new project & put the content inside the specified folder').
    option('start', 'start development server').
    option('deploy [deploymentFolderName]', 'create build for deployment').
    option('add', 'add the components').
    parse(process.argv);

processCommand(commander);
// console.log(commander);