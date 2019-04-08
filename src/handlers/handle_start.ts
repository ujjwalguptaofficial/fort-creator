import { runCommand } from "../helpers";

export const handleStart = function () {
    runCommand("npm run start").then(function (code) {
        if (code != 0) {
            console.log(`unable to start dev server, process exited with code ${code}`);
        }
    });
}