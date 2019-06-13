import { prompt } from "inquirer";

export const askForAdd = function () {
    return new Promise(function (res, rej) {
        var questions = [{
            name: 'add_info',
            message: "what do you want to add",
            type: 'list',
            choices: ["controller", "shield", "wall", "guard"]
        }];
        prompt(questions).then(function (answers) {
            res(answers.add_info);
        });
    });
}