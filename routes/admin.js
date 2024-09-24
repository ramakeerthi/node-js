const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    // console.log('In another middleware');
    //If not calling next middleware we need to send response
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {pageTitle: 'Add Products', path:'/admin/add-product'})
});

router.post('/add-product',(req, res, next) => {
    // console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.adminRoutes = router;
exports.products = products;