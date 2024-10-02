const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'qwertyrk', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;