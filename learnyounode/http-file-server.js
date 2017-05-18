var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var location = process.argv[3];

var server = http.createServer(function (req, res) {
    var src = fs.createReadStream(location);
    src.pipe(res);
});
server.listen(port);