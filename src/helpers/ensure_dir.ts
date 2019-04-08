import { existsSync, mkdirSync } from "fs";

export const ensureDir = function (dir: string) {
    if (!existsSync(dir)) {
        mkdirSync(dir);
    }
}

