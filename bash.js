let workingDir = require('./pwd.js');
let ls = require('./ls.js');
let cat = require('./cat.js');
let curl = require('./curl.js');


//output a prompt
process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');
  if (cmd[0] === 'pwd'){
    workingDir(done);
  } else if (cmd[0] === 'ls'){
    ls(done);
  } else if (cmd[0] === 'cat'){
    cat(done,cmd[1]);
  } else if (cmd[0] === 'curl'){
      curl(done,cmd[1]);
  } else{
    done(cmd.join(" "));
  }
})

const done = (output) => {
  process.stdout.write('You Typed: ' + output);
  process.stdout.write('\nPrompt > ')

}

module.exports = done;
