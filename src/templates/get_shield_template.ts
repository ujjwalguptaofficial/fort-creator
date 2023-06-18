export const getShieldTemplate = function (shieldName: string) {
    return `
import { Shield, textResult } from "fortjs";
export class ${shieldName} extends Shield {
    async protect() {
        
    }
}`
}