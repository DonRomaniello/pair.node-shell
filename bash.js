let workingDir = require('./pwd.js');
let ls = require('./ls.js');
let cat = require('./cat.js');

//output a prompt
process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd'){
    workingDir();
  } else if (cmd === 'ls'){
    ls();
  } else if (cmd === 'cat'){
    cat();
  } else{
    process.stdout.write('You Typed: ' + cmd);
    process.stdout.write('\nprompt > ')
  }
})
