import { exec } from "child_process";

export const handleStart = function () {
    var cmd = exec("npm run start");
    cmd.on("error", function (err) {
        console.error(err);
    })
    cmd.stdout.on('data', function (data) {
        console.log(data.toString());
    });
    cmd.stderr.on('data', function (data) {
        console.log(data.toString());
    });
    cmd.on('exit', function (code) {
        console.log('start command exited with code ' + code.toString());
    });
}