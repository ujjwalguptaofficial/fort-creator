export const getWallTemplate = function (wallName: string) {
    return `
import { Wall, textResult } from "fortjs"

export class ${wallName} extends Wall {
    async onIncoming() {
        try{

        }
        catch(ex){
            // log the error
            // return  some good message like below
            return textResult("Our Server is busy right now, we are sorry for inconvenience. Please try later.")           
        }
    }
}    
`
}