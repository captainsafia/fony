#! /usr/bin/env node
'use strict';

const fs = require('fs');
const program = require('commander');

const _version_ = require('../package.json').version;
const createData = require('./utils');

program
  .version(_version_);

program
  .option('-t, --template <template>', 'JSON template for data to be generated')
  .option('-f, --file <filename>', 'File with a JSON template')
  .option('-c, --count [count]', 'The number of elements to create, defaults to 1', 1)
  .parse(process.argv);


if (program.template && program.file) {
  return console.error('Cannot have both --file and --template arguments!');
}
if (!(program.template || program.file)) {
  return console.error('Must have one of --file and --template arguments!');
}

var templateSource = program.template;
var template;

try {
  if (program.file) {
    templateSource = fs.readFileSync(program.file);
  }

  template = JSON.parse(templateSource);
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
