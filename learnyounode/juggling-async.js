var http = require('http');
var bl = require('bl');

var list = [];
var count = 0;

function printServerResponse() {
    list.forEach(element => console.log(element));
}

function getServerResponse(index) {
    http.get(process.argv[index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                console.error(err);
            } else {
                //list.push(data.toString());
                list[index] = data.toString();
                count++;
            }
            if (count === 3) {
                printServerResponse();
            }
        }));
    });
}

for (var i = 2; i < process.argv.length; i++) {
    //console.log(i);

    getServerResponse(i);
}