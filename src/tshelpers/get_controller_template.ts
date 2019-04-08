export const getControllerTemplate = function (controllerName: string) {
    return `
import { Controller, DefaultWorker, Worker } from "fortjs";

export class ${controllerName} extends Controller {

    @DefaultWorker()
    async index() {
        try {
            
        } catch (ex) {
            console.log(ex);
            // handle exception and show user a good message.
            // save this ex in a file or db, so that you can know what's the issue and where
            const result = await textResult("Our server is busy right now. Please try later.");
            return result;
        }
    }
}`
}