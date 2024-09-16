const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use('/', (req,res,next) =>{
//     console.log('This always runs');
//     next();
// });

app.use(bodyParser.urlencoded({extended:false}));
// parses req body and calls next to continue middleware funnel, extended restricts to current form type input

app.use('/add-product', (req, res, next) => {
    // console.log('In another middleware');
    //If not calling next middleware we need to send response
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    // console.log('In another middleware');
    //If not calling next middleware we need to send response
    res.send('<h1>Welcome to express</h1>');
});

app.listen(3000);