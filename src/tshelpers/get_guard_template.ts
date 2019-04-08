export const getGuardTemplate = function (guardName: string) {
    return `
import { Guard, textResult } from "fortjs";

export class ${guardName} extends Guard {
    async check() {
        try{

        }
        catch(ex){
            // log the error
            // return  some good message like below
            return textResult("Our Server is busy right now, we are sorry for inconvenience. Please try later.")           
        }
    }
}`
}