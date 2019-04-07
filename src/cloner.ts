import {
    execSync
} from "child_process";

const typescriptProjectUrl = "https://github.com/ujjwalguptaofficial/fortjs-typescript-starter";
const javascriptProjectUrl = "https://github.com/ujjwalguptaofficial/fortjs-javascript-starter";


export const clone = function (type, name) {
    // clone with less history
    var command = "git clone --depth=1 ";
    // create the url based on type
    command += type === "typescript" ? typescriptProjectUrl : javascriptProjectUrl;
    // clone inside the provided name
    command += " " + name;
    execSync(command);
    console.log('setting up project');
    // Remove the .git directory
    execSync(`rm -rf ./${name}/.git`)
    // downloading dependencies
    execSync(`cd ${name} && npm install`);
}