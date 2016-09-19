var commands = require("./commands.js");


// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim().split(" "); // remove the newline

  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ');

  var callback = function(str){
    console.log(str);
    process.stdout.write('\nprompt > ');
  }

  commands[cmd[0]] && commands[cmd[0]](cmd.slice(1), callback);
});
