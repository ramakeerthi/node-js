const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('In another middleware');
    //If not calling next middleware we need to send response
    res.send('<h1>Welcome to express</h1>');
});

module.exports = router;