var url = require('url');
var http = require('http');
var fs = require('fs');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
    given_url = url.parse(req.url, true);
    if (given_url.pathname === '/api/parsetime') {
        var response = {};
        var time = new Date(given_url.query.iso);
        response.hour = time.getHours();
        response.minute = time.getMinutes();
        response.second = time.getSeconds();
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(response));
    }
    if (given_url.pathname === '/api/unixtime') {
        var response = {};
        response.unixtime = new Date(given_url.query.iso).getTime();
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(response));
    }
});
server.listen(port);