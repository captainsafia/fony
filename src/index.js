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
  .parse(process.argv);

var template;
try {
  template = JSON.parse(program.template);
} catch (error) {
  return console.log(error);
}

if (program.count > 1) {
  var output = [];
  for (var i = 0; i < program.count; i++) {
    output.push(createData(template));
  }
  return console.log(output);
} else {
  return console.log(createData(template));
}
