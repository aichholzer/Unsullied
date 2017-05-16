#!/usr/bin/env node
'use strict';


const unsullied = require('./index');
const argv = require('minimist')(process.argv.slice(2));

console.log(unsullied({
    case: argv.case,
    separator: argv.separator
}));
