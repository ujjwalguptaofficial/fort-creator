export const getShieldTemplate = function (shieldName: string) {
    return `
import { Shield, textResult } from "fortjs";
export class ${shieldName} extends Shield {
    async protect() {
        try {
          
        } catch (ex) {
            // log the error
            // return  some good message
            return textResult("Our Server is busy right now, we are sorry for inconvenience. Please try later.")
        }
    }
}`
}