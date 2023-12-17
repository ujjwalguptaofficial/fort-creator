export const getShieldTemplate = function (shieldName: string) {
    return `
import { Shield } from "fortjs";
export class ${shieldName} extends Shield {
    async protect() {
        
    }
}`
}