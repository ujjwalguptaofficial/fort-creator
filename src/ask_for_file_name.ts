import {
    prompt
} from "inquirer";

export const askForFileName = function () {
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
            });
    });
}