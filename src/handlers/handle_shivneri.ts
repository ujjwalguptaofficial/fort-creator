import { runCmdSync, runCommand } from "../helpers";
import commandExist from "command-exists";
const shardNotFound = "Shards command can not be found - either crystal is not installed or installation is broken."
const crystalNotFound = "Crystal command can not be found - either crystal is not installed or installation is broken."
import * as Path from "path";
import { ensureDir, createFile } from "fs-extra";
export async function handleShivneri(appName: string) {
    // console.log("creating project..")
    try {
        const isShardExist = await commandExist("crystal");
        if (!isShardExist) {
            return console.error(crystalNotFound)
        }

        let crystalInitCommand = `crystal init app ${appName}`
        let exitCode = await runCommand(crystalInitCommand);

        if (exitCode != 0) {
            console.error(`Unable to create project, process exited with code ${exitCode.toString()}`)
        }

        const srcPath = Path.join(process.cwd(), appName, "src");

        await ensureDir(Path.join(srcPath, "controllers"))
        await ensureDir(Path.join(srcPath, "guards"))
        await ensureDir(Path.join(srcPath, "services"))
        await ensureDir(Path.join(srcPath, "models"))
        await ensureDir(Path.join(srcPath, "walls"))
        await ensureDir(Path.join(srcPath, "shields"))

    } catch (error) {
        console.error(crystalNotFound)
    }

}
