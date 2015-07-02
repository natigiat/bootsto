#!/usr/bin/env node
var clc = require('cli-color');

var userArgs = process.argv.slice(2);

var searchPattern = userArgs[0];

if (searchPattern == 'help' || searchPattern == '-h' || searchPattern == '') {

	console.log('Usage: bootsto task args cli v1.0.0');
	console.log('\nAvailable tasks: (use --help or -h for more info)');
	console.log(clc.red('Text in red'));
	

};
