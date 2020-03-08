import { prompt } from "inquirer";
export const askForProjectLanguage = async function () {
    const questions = [{
        name: 'project_language',
        message: "choose project language",
        type: 'list',
        choices: ["typescript", "javascript", "crystal"]
    }];
    const answers = await prompt(questions);
    return answers.project_language;
}