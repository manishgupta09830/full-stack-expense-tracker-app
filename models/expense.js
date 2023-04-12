const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Expense = sequelize.define('expenseItems', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  amount: Sequelize.DOUBLE,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
});

module.exports = Expense;