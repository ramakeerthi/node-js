const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')
const commonController = require('./controllers/common');
const mongoConnect = require('./utils/database').mongoConnect;

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
// parses req body and calls next to continue middleware funnel, extended restricts to current form type input
app.use(express.static(path.join(__dirname,'public/')));

app.use((req, res, next) => {
    // User.findByPk(1)
    //     .then( user => {
    //         req.user = user;
    //         next();
    //     })
    //     .catch( err => console.log(err));
    next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(commonController.getPageNotFound);

mongoConnect(() => {
    app.listen(3000);
});
