var fs = require("fs");

fs.readdir(process.argv[2], function afterRead(err, filenames){
    if (err) {
        throw err;
    }

    filenames.forEach(file => {
        if (file.includes("."+process.argv[3]))
            console.log(file);
    }, this);
})