const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop')

const app = express();

app.set('view engine','pug');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
// parses req body and calls next to continue middleware funnel, extended restricts to current form type input
app.use(express.static(path.join(__dirname,'public/')));

app.use('/admin', adminData.adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page not found'});
});

app.listen(3000);