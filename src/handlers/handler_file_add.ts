import { askToChooseComponent, getSnakeCase } from "../helpers";
import {
    prompt
} from "inquirer";
import * as path from "path";
import * as fs from "fs";
import { getControllerTemplate, getShieldTemplate, getGuardTemplate, getWallTemplate } from "../tshelpers";
import { ensureDir } from "../helpers";

export const handleFileAdd = async (language: string) => {
    const fileType: string = await askToChooseComponent();
    let componentName = await askForComponentName(fileType);
    componentName = componentName[0].toUpperCase() + componentName.substr(1);
    const indexOfFileType = componentName.length - fileType.length - 1
    if (componentName.toLowerCase().includes(fileType.toLowerCase(), indexOfFileType)) {
        componentName = componentName.substr(0, indexOfFileType + 1);
    }
    componentName += fileType;
    const extension = language === "typescript" ? "ts" : "js";
    let fileNameWithExtension: string = getSnakeCase(componentName) + "." + extension;
    const folderName = `${fileType.toLowerCase()}s`;
    ensureDir(folderName);
    const content = createContentBasedOnFileType(fileType, componentName);
    const filePath = `${folderName}/${fileNameWithExtension}`;
    fs.writeFileSync(filePath, content, {
        encoding: "utf-8"
    });
    console.log(`file created at - "${filePath}"`);
}

const createContentBasedOnFileType = function (fileType: string, componentName: string) {
    switch (fileType.toLowerCase()) {
        case "controller": return getControllerTemplate(componentName);
        case "shield": return getShieldTemplate(componentName);
        case "guard": return getGuardTemplate(componentName);
        case "wall": return getWallTemplate(componentName);
    }
    return "";
}

const askForComponentName = async function (type: string) {
    var questions = [{
        name: 'componentName',
        message: `Enter ${type} name`,
        type: 'input'
    }];

    const answers = await prompt(questions);
    return answers.componentName as string;
}