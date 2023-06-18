export const getGuardTemplate = function (guardName: string) {
    return `
import { Guard, textResult } from "fortjs";

export class ${guardName} extends Guard {
    async check() {
        
    }
}`
}