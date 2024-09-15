const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('First Middleware Reached!');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Second Middleware Reached!');
//     res.send('<h1>Welcome to the express basics assignment :)</h1>');
// });

app.use('/users', (req, res, next) => {
    console.log('Middleware with /users path reached!');
    res.send('<h1>Welcome to Users Page!</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Middleware with / path reached!');
    res.send('<h1>Welcome to the express basics assignment :)</h1>');
});

app.listen(3000);