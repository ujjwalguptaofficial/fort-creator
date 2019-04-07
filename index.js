const {
    download
} = require("./src/download");

const path = require("path");

const downloadPath = path.join(__dirname, "src/hi.zip");
console.log(downloadPath);
download("https://github.com/ujjwalguptaofficial/fortjs-typescript-starter/archive/master.zip", downloadPath, function () {

}, function (err) {
    console.error("error ccured", err);
})