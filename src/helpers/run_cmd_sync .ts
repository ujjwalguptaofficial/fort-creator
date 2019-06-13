import { spawn, execSync } from "child_process";

export const runCmdSync = function (cmd) {
    execSync(cmd, { stdio: [0, 1, 2] });
}