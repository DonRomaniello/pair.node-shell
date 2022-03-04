let fs = require('fs');
let done = require('./bash.js');

let headOut = (done,fileToRead) => {
  fs.readFile(fileToRead, 'utf8', (err, data) => {
    if (err){
      done("Something went wrong");
    } else {
     let headArray = [];
     let splitData = data.split('\n')

     for (let i = 0; i < (splitData.length || 10); i++){
      headArray.push(splitData[i]);
     }



     done(headArray.join('\n'));
    }
  });
}

module.exports = headOut;
