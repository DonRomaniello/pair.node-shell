const done = require("./bash");

let echoOut = (done, phrase) => {
  done(phrase);
}

module.exports = echoOut;
