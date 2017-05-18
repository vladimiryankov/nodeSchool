var fs = require('fs')

var filebuf = fs.readFileSync(process.argv[2]);
var datfile = filebuf.toString();
var counter = 0

for (var index = 0; index < datfile.length; index++) {
    if (datfile[index] == '\n') {
        counter++;
    }
}

//better
//var lines = datfile.split('\n').length - 1;

console.log(counter);