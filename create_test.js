const assert = require('assert');

const User = require('../src/user');


describe('Creating records', () => {
    it('Saves a User', () => {
        
        const joe = new User({ name: 'Joe' });

        
        joe.save();
    });
});