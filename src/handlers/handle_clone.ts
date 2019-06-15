import { runCommand, runCmdSync } from "../helpers";
import { removeSync, moveSync, ensureDir, pathExistsSync } from "fs-extra";
import * as Path from "path";
import { Spinner } from "cli-spinner";
import { EOL } from "os";

const typescriptProjectUrl = "https://github.com/ujjwalguptaofficial/fortjs-typescript-starter";
const javascriptProjectUrl = "https://github.com/ujjwalguptaofficial/fortjs-javascript-starter";


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
export const handleClone = async function (type, name) {
    if (pathExistsSync(name)) {
        console.error(`A folder with name ${name} already exist in the current directoy`);
        return;
    }
    const cloneProjPath = Path.join(__dirname, name);
    // clone with less history
    var command = `git clone --depth=1 `;
    // create the url based on type
    command += type === "typescript" ? typescriptProjectUrl : javascriptProjectUrl;
    // clone inside the provided name
    command += " " + `${cloneProjPath}`;
    try {
        let exitCode = await runCommand(command)
        if (exitCode != 0) {
            console.log(`unable to clone, process exited with code ${exitCode.toString()}`)
        }
        else {
            SpinnerHelper.init("setting up project");
            // Remove the .git directory

            removeSync(Path.join(cloneProjPath, '.git/'));
            // copy project directory
            // ensureDir(name);
            moveSync(cloneProjPath, name);
            SpinnerHelper.stop();
            SpinnerHelper.init(`downloading dependency`);
            // downloading dependencies
            runCmdSync(`cd ${name} && npm install && npm install fortjs@latest`);
            SpinnerHelper.stop();
            if (exitCode != 0) {
                console.log(`unable to install dependencies, process exited with code ${exitCode.toString()}`)
            }
            else {
                console.log(`${EOL}new project ${name} created`);
            }
        }
    }
    catch (err) {
        console.error(err);
        SpinnerHelper.stop();
    }
}