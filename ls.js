let fs = require('fs');
let done = require('./bash.js');

let lsRead = (done) =>{
  fs.readdir('./','utf8', (err,files) => {
    if (err){
      done('Something went wrong');
    } else {
      done(files.join('\n'));
    }
  })
}


module.exports = lsRead;
