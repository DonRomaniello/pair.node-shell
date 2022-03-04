let fs = require('fs');

let catOut = (fileToRead) => {
  fs.readFile(fileToRead, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });



}



module.exports = catOut;
