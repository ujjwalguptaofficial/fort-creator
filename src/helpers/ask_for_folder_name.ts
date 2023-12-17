import { prompt } from "inquirer";



export const askForFolderName = async function () {
    console.log('📂 Enter the folder name to create the project inside. Leave it blank to use the current folder.');

    const questions = [{
        name: 'folder_name',
        message: "📁 Folder name: ",
        type: 'input',
    }];

    const answers = await prompt(questions);
    return answers.folder_name;
}
