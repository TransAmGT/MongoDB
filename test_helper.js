const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/users_test', {useNewUrlParser: true});


mongoose.connection
    .once('open', () => console.log('Good to Go!'))
    .on('error', (error) => {
        console.warn('Error', error);
    });