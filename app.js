const express = require('express');

const app = express();

app.use('/', (req,res,next) =>{
    console.log('This always runs');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware');
    //If not calling next middleware we need to send response
    res.send('<h1>The Add Product page!</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware');
    //If not calling next middleware we need to send response
    res.send('<h1>Welcome to express</h1>');
});

app.listen(3000);