const commander = require("commander");
const inquirer = require('inquirer');
const {
    clone
} = require('./src/cloner');

commander.option('new [folderName]', 'Create new project & put the content inside the specified folder', 'fortjs-app').
// option('-p --port [value]', 'Configure the specified port', 3000).
// option('-g --generate', 'Generate the idbstudio files').
// option('-f --folder [folderName]', 'Take the folder name', 'idbstudio').
// option('--sql [query]', 'convert sql to jsstore equivalent').
parse(process.argv);

if (commander.new) {
    const questions = [{
        name: 'project_language',
        message: "choose project language",
        type: 'list',
        choices: ["typescript", "javascript"]
    }];
    inquirer.prompt(questions).
    then(function (answers) {
        try {
            clone(answers.project_language, commander.new);
        } catch (err) {
            console.error(err.message);
        }

    });
}