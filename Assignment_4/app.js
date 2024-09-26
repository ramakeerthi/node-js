const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const products = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public/')));

app.get('/', (req, res, next) => {
    res.render('homepage', { pageTitle: 'Form Page'});
});

app.get('/users', (req, res, next) => {
    res.render('userpage', { pageTitle: 'User Page', prods: products});
});


app.post('/add-user',(req, res, next) => {
    products.push({username: req.body.username});
    res.redirect('/');
});

app.listen(3000);