var fs = require('fs');


fs.readFile(process.argv[2], function afterRead(err, datfile) {
    if (err) {
        throw err;
    }
    // fs.readFile(file, 'utf8', callback) can also be used
    console.log(datfile.toString().split("\n").length - 1);
});