import { askForAdd } from "../ask_for_add";
import {
    prompt
} from "inquirer";
import { getSnakeCase } from "../get_snake_case";
import * as path from "path";
import * as fs from "fs";
import { getControllerTemplate, getShieldTemplate, getGuardTemplate, getWallTemplate } from "../tshelpers";
import { ensureDir } from "../helpers";

export const handleFileAdd = function (language: string) {
    askForAdd().
        then(function (fileType: string) {
            askForFileName().then(function (file) {
                const fileInfo = path.parse(file);
                let fileNameWithExtension: string;
                const componentName = fileInfo.name;
                const extension = language == "typescript" ? "ts" : "js";
                if (fileInfo.ext) {
                    fileNameWithExtension = componentName + "." + extension;
                }
                else {
                    fileNameWithExtension = getSnakeCase(componentName) + "." + extension;
                }

                const folderName = `${fileType}s`;
                ensureDir(folderName);
                const content = getContent(fileType, componentName);
                const filePath = `${folderName}/${fileNameWithExtension}`
                fs.writeFileSync(filePath, content, {
                    encoding: "utf-8"
                });
                console.log(`file created at - "${filePath}"`)
            })
        });
}

const getContent = function (fileType: string, componentName: string) {
    switch (fileType) {
        case "controller": return getControllerTemplate(componentName);
        case "shield": return getShieldTemplate(componentName);
        case "guard": return getGuardTemplate(componentName);
        case "wall": return getWallTemplate(componentName);
    }
    return "";
}

const askForFileName = function () {
    return new Promise<string>(function (res, rej) {
        var questions = [{
            name: 'file_name',
            message: "enter file name",
            type: 'input',
            choices: ["controller", "shield", "wall",]
        }];
        prompt(questions).
            then(function (answers) {
                res(answers.file_name);
                // res(path.parse(answers.file_name).name);
            });
    });
}