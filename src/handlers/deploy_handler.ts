import { exec } from "child_process";

export const handleDeploy = function (deployFolderName: string) {
    var cmd = exec(`BUILD_FOLDER=${deployFolderName} npm run deploy`);
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
        if (code == 0) {
            console.log("build created for deploy")
        } else {
            console.log('deploy command exited with code ' + code.toString());
        }
    });

}