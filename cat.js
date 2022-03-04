let fs = require('fs');
let done = require('./bash.js');

let catOut = (done,fileToRead) => {
  fs.readFile(fileToRead, 'utf8', (err, data) => {
    if (err){
      done("Something went wrong");
    } else {
      done(data);
    }
  });



}



module.exports = catOut;
