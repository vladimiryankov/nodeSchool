var net = require('net');

var port = process.argv[2];

function zeroFill (i) {
    return (i<10 ? '0' : '') + i;
}

var server = net.createServer(function (socket) {
    // socket handling
    var date = new Date();
    socket.end(date.getFullYear() + '-' +
                zeroFill(date.getMonth() + 1) + '-' +
                zeroFill(date.getDate()) + ' ' +
                zeroFill(date.getHours()) + ':' +
                zeroFill(date.getMinutes()) + '\n');
});
server.listen(port);
