const path=require('path');
const expense = require('../models/expense');
const getUser=  (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','Frontend','Expense App.html'))
}
const postExpense=(req,res,next)=>{
    console.log(req.body);
}
const addExpense = async (req, res) => {
    try {
        const amount = req.body.amount;
        const description = req.body.description;
        const category = req.body.category;

        const data = await expense.create( {amount: amount, description: description, category: category});
        res.status(201).json({newExpenseDetail: data});
    } catch(err) {
        console.log('The expense data is not posting');
        res.status(500).json({
            error:err
        })
    }
}

const getExpenses = async (req, res) => {
    try {
        const expenses = await expense.findAll()
        res.status(200).json({allExpensesDetails: expenses})
    } catch(error) {
        console.log('Get expenses is failing', JSON.stringify(error))
        res.status(500).json({error: error})
    }
}

const deleteExpense = async (req, res) => {
    try {
        if(!req.params.id === 'undefined') {
            console.log("ID is missing")
            return res.status(400).json({err: 'ID is missing'})
        }
        const expenseId = req.params.id;
        await expense.destroy({where: {id: expenseId}});
        res.sendStatus(200);
    } catch(err) {
        console.log(err)
        res.status(500).json(err);
    }
}

module.exports = {
    getUser,
    postExpense,
    addExpense,
    getExpenses,
    deleteExpense
}