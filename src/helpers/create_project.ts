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

        SpinnerHelper.init("🚀 Setting up the project");
        const downloadStat = await ghDownload(templatePath, projectPath, {
            muteLog: true,
        });

        if (!downloadStat.success) {
            const err = `❌ Error: ${downloadStat.error}\nProject Path: ${projectPath}\nTemplate Path: ${templatePath}`;
            throw new Error(err || 'Unable to download the template repository. Please contact the author if you see this error.');
        }

        SpinnerHelper.stop();
        SpinnerHelper.init("⚙️ Installing dependencies");
        // downloading dependencies
        let exitCode = await runCommand(`cd ${projectPath} && npm i`);
        SpinnerHelper.stop();
        if (exitCode != 0) {
            console.log(`Unable to install dependencies, process exited with code ${exitCode.toString()}`)
        }
        else {
            console.log(`${EOL}🚀 New project '${projectPath}' initiated!`);
            if (folderName) {
                console.log(`📁 Execute 'cd ${folderName}' to enter into the project directory.`);
            }
            console.log(`🛠 Execute 'fort-creator dev' to start the development server.`);
        }
    }
    catch (err) {
        console.error(err);
        SpinnerHelper.stop();
    }
}