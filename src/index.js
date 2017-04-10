#! /usr/bin/env node
'use strict';

const program = require('commander');
const fs = require('fs');

const _version_ = require('../package.json').version;
const createData = require('./utils');

program
  .version(_version_);

program
  .option('-t, --template <template>', 'JSON template for data to be generated')
  .option('-f, --file <file>', 'JSON template for data to be generated')
  .option('-c, --count [count]', 'The number of elements to create, defaults to 1', 1)
  .parse(process.argv);

var template;
try {
  if (program.template !== undefined) {
    template = JSON.parse(program.template);
  } else if (program.file !== undefined) {
    template = JSON.parse(fs.readFileSync(program.file, 'utf8'));
  } else {
    console.log("Specify a template string or file (type 'fony -h')");
    process.exit(1);
  }
} catch (error) {
  return console.log(error);
}

function format(source) {
  return JSON.stringify(source, null, 2);
}

if (program.count > 1) {
  var output = [];
  for (var i = 0; i < program.count; i++) {
    output.push(createData(template));
  }
  return console.log(format(output));
} else {
  return console.log(format(createData(template)));
}
