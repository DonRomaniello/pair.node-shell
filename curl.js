let rq = require("request");
let done = require('./bash.js');

let curlOut = (done,link) => rq(link, function(err, response, body){
  if (err){
    done(err);
  } else {
    done(body);
  }
});




module.exports = curlOut;
