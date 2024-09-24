const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');
const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('In another middleware');
    //If not calling next middleware we need to send response
    // console.log('shop.js',  adminData.products)
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop',{prods: products, docTitle: 'Shop', path: '/', pageTitle: 'Shop'});
});

module.exports = router;