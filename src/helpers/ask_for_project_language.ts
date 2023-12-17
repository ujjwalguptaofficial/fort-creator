import { prompt } from "inquirer";

export const askForProjectLanguage = async function () {
    const questions = [{
        name: 'project_language',
        message: "🚀 Choose the project language:",
        type: 'list',
        choices: ["TypeScript", "JavaScript"]
    }];

    const answers = await prompt(questions);
    return answers.project_language.toLowerCase(); // Normalize the language to lowercase
}
