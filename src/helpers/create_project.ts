import { EOL } from "os";
import { runCommand } from ".";
import { Spinner } from "cli-spinner";
import * as path from "path";
import ghDownload from "github-directory-downloader";

class SpinnerHelper {
    static spinnerInstance;
    static init(text: string) {
        const spinnerInstance = SpinnerHelper.spinnerInstance = new Spinner(`${text}.. %s`);
        spinnerInstance.setSpinnerString(18);
        spinnerInstance.start();
    }

    static stop() {
        SpinnerHelper.spinnerInstance.stop();
    }
}

export const createProject = async function (type, folderName) {
    const projectPath = path.join(process.cwd(), folderName);
    var templatePath = "https://github.com/ujjwalguptaofficial/fortjs-templates/tree/main/" + type;
    try {

        SpinnerHelper.init("Setting up project");
        const downloadStat = await ghDownload(templatePath, projectPath, {
            muteLog: true
        });
        if (!downloadStat.success) {
            const err = `error - ${downloadStat.error}, project path = ${projectPath}, template path = ${templatePath}`;
            throw new Error(err || 'Can not download the template repo, please contact author if you are seeing this error.');
        }
        SpinnerHelper.stop();
        SpinnerHelper.init(`Installing dependency`);
        // downloading dependencies
        let exitCode = await runCommand(`cd ${projectPath} && npm i`);
        SpinnerHelper.stop();
        if (exitCode != 0) {
            console.log(`Unable to install dependencies, process exited with code ${exitCode.toString()}`)
        }
        else {
            console.log(`${EOL}new project '${projectPath}' initiated`);
            if (folderName) {
                console.log(`Execute command 'cd ${folderName}' to enter into project directory.`)
            }
            console.log(`Execute command - 'fort-creator dev' for startin dev server.`);
        }
    }
    catch (err) {
        console.error(err);
        SpinnerHelper.stop();
    }
}