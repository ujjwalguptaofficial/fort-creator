import { prompt } from "inquirer";
export const askForProjectLanguage = function () {
    return new Promise(function (res, rej) {
        const questions = [{
            name: 'project_language',
            message: "choose project language",
            type: 'list',
            choices: ["typescript", "javascript", "crystal"]
        }];
        prompt(questions).
            then(function (answers) {
                res(answers.project_language);
            });
    });
}