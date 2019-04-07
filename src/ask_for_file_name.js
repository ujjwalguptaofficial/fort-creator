const inquirer = require('inquirer');

exports.askForFileName = function () {
    return new Promise(function (res, rej) {
        var questions = [{
            name: 'file_name',
            message: "enter file name",
            type: 'input',
            choices: ["controller", "shield", "wall", ]
        }];
        inquirer.prompt(questions).
        then(function (answers) {
            res(answers.file_name);
        });
    });
}