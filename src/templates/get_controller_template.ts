export const getControllerTemplate = function (controllerName: string) {
    return `
import { Controller, defaultWorker, worker, textResult } from "fortjs";

export class ${controllerName} extends Controller {

    @defaultWorker()
    async index() {
        
    }
}`
}