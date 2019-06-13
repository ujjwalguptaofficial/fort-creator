export const getControllerTemplate = function (controllerName: string) {
    return `
import { Controller, DefaultWorker, Worker, textResult } from "fortjs";

export class ${controllerName} extends Controller {

    @DefaultWorker()
    async index() {
        
    }
}`
}