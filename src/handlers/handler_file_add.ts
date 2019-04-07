import { askForAdd } from "../ask_for_add";
import { askForFileName } from "../ask_for_file_name";
import { getSnakeCase } from "../get_snake_case";
import * as path from "path";
import * as fs from "fs";
import { getControllerTemplate } from "../tshelpers";

export const handleFileAdd = function (language: string) {
    askForAdd().
        then(function (fileType: string) {
            askForFileName().then(function (componentName) {
                componentName = path.basename(componentName);
                const fileName = getSnakeCase(componentName);
                const extension = language == "typescript" ? "ts" : "js";
                const content = getContent(fileType, componentName);
                fs.writeFileSync(`${fileType}s/${fileName}.${extension}`, content, {
                    encoding: "utf-8"
                });
            })
        });
}

const getContent = function (fileType: string, componentName: string) {
    switch (fileType) {
        case "controller": return getControllerTemplate(componentName);
    }
    return "";
}