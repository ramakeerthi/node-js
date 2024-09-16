const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
// parses req body and calls next to continue middleware funnel, extended restricts to current form type input

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Error 404, Page not found :(</h1>');
});

app.listen(3000);