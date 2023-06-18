import { prompt } from "inquirer";

export const askForProjectLanguage = async function () {
    const questions = [{
        name: 'project_language',
        message: "Choose project language",
        type: 'list',
        choices: ["typescript", "javascript"]
    }];
    const answers = await prompt(questions);
    return answers.project_language;
}