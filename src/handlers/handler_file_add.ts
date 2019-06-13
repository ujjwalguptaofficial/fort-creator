import { askForAdd, getSnakeCase } from "../helpers";
import {
    prompt
} from "inquirer";
import * as path from "path";
import * as fs from "fs";
import { getControllerTemplate, getShieldTemplate, getGuardTemplate, getWallTemplate } from "../tshelpers";
import { ensureDir } from "../helpers";

export const handleFileAdd = function (language: string) {
    askForAdd().
        then(function (fileType: string) {
            askForControllerName().then(function (file) {
                const fileInfo = path.parse(file);
                const componentName = fileInfo.name;
                const extension = language == "typescript" ? "ts" : "js";
                let fileNameWithExtension: string = getSnakeCase(componentName) + "." + extension;
                const folderName = `${fileType}s`;
                ensureDir(folderName);
                const content = createContentBasedOnFileType(fileType, componentName);
                const filePath = `${folderName}/${fileNameWithExtension}`
                fs.writeFileSync(filePath, content, {
                    encoding: "utf-8"
                });
                console.log(`file created at - "${filePath}"`)
            })
        });
}

const createContentBasedOnFileType = function (fileType: string, componentName: string) {
    switch (fileType) {
        case "controller": return getControllerTemplate(componentName);
        case "shield": return getShieldTemplate(componentName);
        case "guard": return getGuardTemplate(componentName);
        case "wall": return getWallTemplate(componentName);
    }
    return "";
}

const askForControllerName = function () {
    return new Promise<string>(function (res, rej) {
        var questions = [{
            name: 'controller_name',
            message: "Enter controller name",
            type: 'input',
            choices: ["controller", "shield", "wall",]
        }];
        prompt(questions).
            then(function (answers) {
                res(answers.controller_name);
            });
    });
}