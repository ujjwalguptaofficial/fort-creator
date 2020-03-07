import { Spinner } from "cli-spinner";

let spinnerInstance;
export class SpinnerHelper {
    static init(text: string) {
        spinnerInstance = new Spinner(`${text}.. %s`);
        spinnerInstance.setSpinnerString(18);
        spinnerInstance.start();
    }

    static stop() {
        spinnerInstance.stop();
    }
}