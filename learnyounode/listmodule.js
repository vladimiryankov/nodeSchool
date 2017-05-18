var fs = require('fs')

var filenames = [];

module.exports = function (dirname, ext, callback) {
    fs.readdir(dirname, function (err, data){
        if (err) {
            return callback(err);
        } else {
            data.forEach(element => {
                if (element.includes("." + ext))
                    filenames.push(element);
            }, this);
            return callback(null, filenames);
        }
    })
}


