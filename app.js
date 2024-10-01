const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')
const commonController = require('./controllers/common');
const sequelize = require('./utils/database');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
// parses req body and calls next to continue middleware funnel, extended restricts to current form type input
app.use(express.static(path.join(__dirname,'public/')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(commonController.getPageNotFound);

sequelize.sync()
    .then( result => {
        // console.log(result);
        app.listen(3000);
    })
    .catch( err => console.log(err));