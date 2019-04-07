var http = require('http');
var https = require('https');
var fs = require('fs');

exports.download = function (url, dest, onSuccess, onError) {
    var file = fs.createWriteStream(dest);
    var onErrorOccured = function (err) {
        fs.unlink(dest); // Delete the file async. (But we don't check the result)
        onError(err);
    }
    var protocol = url.indexOf('https') >= 0 ? https : http;
    var request = protocol.get(url, function (response) {
        response.pipe(file);
        file.on('finish', function () {
            file.close(onSuccess); // close() is async, call cb after close completes.
        });
    }).on('error', onErrorOccured);

    file.on("error", onErrorOccured);
};