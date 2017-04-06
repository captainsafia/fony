#! /usr/bin/env node
'use strict';

const program = require('commander');

const _version_ = require('../package.json').version;
const createData = require('./utils');

program
  .version(_version_);

program
  .option('-t, --template <template>', 'JSON template for data to be generated')
  .option('-c, --count [count]', 'The number of elements to create, defaults to 1', 1)
  .option('-j, --json', 'Format the output as valid JSON, defaults to false', true)
  .parse(process.argv);

var template;
try {
  template = JSON.parse(program.template);
} catch (error) {
  return console.log(error);
}

function format(source, asJSON) {
  return asJSON ? JSON.stringify(source, null, 2) : source;
}

if (program.count > 1) {
  var output = [];
  for (var i = 0; i < program.count; i++) {
    output.push(createData(template));
  }
  return console.log(format(output, program.json));
} else {
  return console.log(format(createData(template), program.json));
}
