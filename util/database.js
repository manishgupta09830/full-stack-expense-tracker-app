const Sequelize = require('sequelize');

const sequelize = new Sequelize('expenses', 'root', 'Manish@123' ,
{dialect: 'mysql', host: 'localhost'});

module.exports =  sequelize;
