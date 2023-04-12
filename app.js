const path=require('path')
const express = require('express');
var cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./util/database')
const expense = require('./models/expense');

app.use(cors())

app.use(bodyParser.json({ extended: false }));

const expenseRoute = require('./routes/expenseRoutes'); 

app.use('/expense', expenseRoute);

sequelize.sync().then(result => {
    // console.log(result);
}).catch(err => {
    console.log(err);
})

app.listen(4000);