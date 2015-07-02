#!/usr/bin/env node
var Cli = module.exports,
	colors = require('cli-color'),
	BootstoAppLib = require('bootsto-app-lib'),
	optimist = require('optimist'),
	path = require('path'),
	Tasks = require('./tasks/cliTasks'),
	Q = require('q');

	Cli.Tasks = TASKS = Tasks;



// The main entry point for the CLI
// This takes the process.argv array for arguments
// The args passed should be unfiltered. 
// From here, we will filter the options/args out
// using optimist. Each command is responsible for
// parsing out the args/options in the way they need.
// This way, we can still test with passing in arguments.
Cli.run = function run(processArgv) {

  try {
    //First we parse out the args to use them.
    //Later, we will fetch the command they are trying to 
    //execute, grab those options, and reparse the arguments.
    Cli.setUpConsoleLoggingHelpers();


    var argv = optimist(processArgv.slice(2)).argv;
    argv = optimist(processArgv.slice(2)).boolean(booleanOptions).argv;

    Cli.printVersionWarning();
    
  } catch (ex) {
    return ex;
  }
};



Cli.setUpConsoleLoggingHelpers = function setUpConsoleLoggingHelpers() {
  IonicAppLib.events.on('log', console.log);

  colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    small: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'white',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });

  var consoleInfo = console.info;
  console.info = function() {
    if (arguments.length === 1 && !arguments[0]) return;
    var msg = '';
    for (var n in arguments) {
      msg += arguments[n] + ' ';
    }
    consoleInfo.call(console, msg.blue.bold);
  };

  var consoleError = console.error;
  console.error = function() {
    if (arguments.length === 1 && !arguments[0]) return;
    var msg = ' ✗';
    for (var n in arguments) {
      msg += ' ' + arguments[n];
    }
    consoleError.call(console, msg.red.bold);
  };

  console.success = function() {
    if (arguments.length === 1 && !arguments[0]) return;
    var msg = ' ✓';
    for (var n in arguments) {
      msg += ' ' + arguments[n];
    }
    console.log(msg.green.bold);
  };
};

 process.stdout.write('Ionic CLI is out of date:\n');


Cli.printVersionWarning = function printVersionWarning() {
    process.stdout.write('\n------------------------------------\n'.red);
    process.stdout.write('Ionic CLI is out of date:\n'.bold.yellow);
    process.stdout.write( (' * Locally installed version: ' + settings.version + '\n').yellow );
    process.stdout.write( (' * Latest version: ' + Cli.npmVersion + '\n').yellow );
    process.stdout.write( (' * https://github.com/driftyco/ionic-cli/blob/master/CHANGELOG.md\n').yellow );
    process.stdout.write( ' * Run '.yellow + 'npm install -g ionic'.bold + ' to update\n'.yellow );
    process.stdout.write('------------------------------------\n\n'.red);
    Cli.npmVersion = null;
};




// var userArgs = process.argv.slice(2);
// var searchPattern = userArgs[0];



// if (searchPattern == 'help' || searchPattern == '-h' || searchPattern == '') {

// 	console.log('Usage: bootsto task args cli v1.0.0');
// 	console.log('\nAvailable tasks: (use --help or -h for more info)');
// 	console.log(Cli.red('Text in red'));
// };



