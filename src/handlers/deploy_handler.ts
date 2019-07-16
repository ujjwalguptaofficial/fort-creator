import { runCommand } from "../helpers";

export const handleDeploy = function (deployFolderName: string) {
    runCommand(`cross-env BUILD_FOLDER=${deployFolderName} npm run deploy`).then(function (code) {
        if (code == 0) {
            console.log("build created for deploy")
        } else {
            console.log(`unable to create build for deploy, process exited with code ${code.toString()}`);
        }
    });
}