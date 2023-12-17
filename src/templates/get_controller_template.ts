export const getControllerTemplate = function (controllerName: string) {
    return `
import { Controller, http, textResult } from "fortjs";

export class ${controllerName} extends Controller {

    @http.get("/")
    async index() {
        
    }
}`
}