var listmodule = require('./listmodule')

listmodule(process.argv[2], process.argv[3], function(err, filenames){
    if (err) {
        return console.error("There was an error: ", err);
    } else 
        filenames.forEach(function(element) {
            console.log(element);
        }, this);
});
