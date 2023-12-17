export const getWallTemplate = function (wallName: string) {
    return `
import { Wall } from "fortjs";

export class ${wallName} extends Wall {
    async onIncoming() {
        
    }
}    
`
}