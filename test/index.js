'use strict';


const exec = require('child_process').exec;
const unsullied = require('../lib');
const should = require('should');


// As a module

it('Basic string', done => {

    should(unsullied()).be.a.String();
    done();
});

it('Default separator', done => {

    let name = unsullied();
    should(name).be.a.String();
    should(name.indexOf('.')).be.above(2);
    done();
});

it('Custom separator', done => {

    let name = unsullied({ separator: '-' });
    should(name).be.a.String();
    should(name.indexOf('-')).be.above(2);
    done();
});

it('Upper case', done => {

    let name = unsullied({ case: 'upper' });
    should(name).be.a.String();
    if (!name.match(/[a-z]+/)) {
        return done();
    }

    done('Not upper cased.');
});

it('Camel case', done => {

    let name = unsullied({ case: 'camel' });
    should(name).be.a.String();
    if (name.match(/[a-z]\.[A-Z]/)) {
        return done();
    }

    done('Not camel cased.');
});


// As a CLI tool

it('Basic string', done => {

    exec('./lib/cli.js', (error, stdout) => {
        should(stdout).be.a.String();
        done();
    });
});

it('Default separator', done => {

    exec('./lib/cli.js', (error, stdout) => {
        should(stdout).be.a.String();
        should(stdout.indexOf('.')).be.above(2);
        done();
    });
});

it('Custom separator', done => {

    exec('./lib/cli.js --separator=-', (error, stdout) => {
        should(stdout).be.a.String();
        should(stdout.indexOf('-')).be.above(2);
        done();
    });
});

it('Upper case', done => {

    exec('./lib/cli.js --case=upper', (error, stdout) => {
        should(stdout).be.a.String();
        if (!stdout.match(/[a-z]+/)) {
            return done();
        }

        done('Not upper cased.');
    });
});

it('Camel case', done => {

    exec('./lib/cli.js --case=camel', (error, stdout) => {
        should(stdout).be.a.String();
        if (stdout.match(/[a-z]\.[A-Z]/)) {
            return done();
        }

        done('Not camel cased.');
    });
});
