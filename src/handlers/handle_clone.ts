import {
    execSync
} from "child_process";
import { runCommand } from "../helpers";

const typescriptProjectUrl = "https://github.com/ujjwalguptaofficial/fortjs-typescript-starter";
const javascriptProjectUrl = "https://github.com/ujjwalguptaofficial/fortjs-javascript-starter";


export const handleClone = function (type, name) {

    // clone with less history
    var command = "git clone --depth=1 ";
    // create the url based on type
    command += type === "typescript" ? typescriptProjectUrl : javascriptProjectUrl;
    // clone inside the provided name
    command += " " + name;
    runCommand(command).then(function (code) {
        if (code != 0) {
            console.log(`unable to clone, process exited with code ${code.toString()}`)
        }
        else {
            console.log("setting up project....");
            // Remove the .git directory
            execSync(`rm -rf ./${name}/.git`);
            console.log("downloading dependency....");
            // downloading dependencies
            runCommand(`cd ${name} && npm install`).then(function (code) {
                if (code != 0) {
                    console.log(`unable to install dependencies, process exited with code ${code.toString()}`)
                }
            })
        }
    })



}