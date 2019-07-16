import { runCommand, setEnv } from "../helpers";

export const handleDeploy = async function (deployFolderName: string) {
    setEnv('BUILD_FOLDER', deployFolderName);
    setEnv('NODE_ENV', 'production');
    const code = await runCommand(`npm run deploy`);
    if (code == 0) {
        console.log("build created for deploy")
    } else {
        console.log(`unable to create build for deploy, process exited with code ${code.toString()}`);
    }
}