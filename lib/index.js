'use strict';


const data = require('./data.json');

module.exports = (options = {}) => {

    const rand = max => Math.floor(Math.random() * max - 1) + 1;
    let name = data.adjectives[rand(data.adjectives.length)];
    let vernim = data.vernim[rand(data.vernim.length)];

    if (options.case === 'camel') {
        vernim = vernim.charAt(0).toUpperCase() + vernim.slice(1);
    }

    name = `${name}${options.separator || '.'}${vernim}`;

    return options.case === 'upper' ? name.toUpperCase() : name;
};
