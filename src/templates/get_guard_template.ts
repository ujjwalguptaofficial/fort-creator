export const getGuardTemplate = function (guardName: string) {
    return `
import { Guard } from "fortjs";

export class ${guardName} extends Guard {
    async check() {
        
    }
}`
}