import { prompt } from "inquirer";

export const askToChooseComponent = async () => {
    var questions = [{
        name: 'componentChoice',
        message: "Choose the component to add",
        type: 'list',
        choices: ["Controller", "Shield", "Wall", "Guard"]
    }];
    const result = await prompt(questions);
    return result.componentChoice as string;
}