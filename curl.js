let rq = require("request");

let curlOut = (link) => rq(link, function(err, response, body){
  if (err) throw err;
  console.log(body);
});




module.exports = curlOut;
