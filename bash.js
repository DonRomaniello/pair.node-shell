let workingDir = require('./pwd.js');
let ls = require('./ls.js');
let cat = require('./cat.js');
let curl = require('./curl.js');


//output a prompt
process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');
  if (cmd[0] === 'pwd'){
    workingDir();
  } else if (cmd[0] === 'ls'){
    ls();
  } else if (cmd[0] === 'ls'){
      ls();
  } else if (cmd[0] === 'cat'){
    cat(cmd[1]);
  } else if (cmd[0] === 'curl'){
      curl(cmd[1]);
  } else{
    process.stdout.write('You Typed: ' + cmd);
    process.stdout.write('\nprompt > ')
  }
})
