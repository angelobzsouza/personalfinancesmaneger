const express = require('express');
const Service = require('../services/transactionService');
const transactionRouter = express.Router();
const service = new Service();

transactionRouter.get('/', async (req, res, next) => {
  try {
    const { period } = req.query;
    if (!period) {
      throw new Error('It is necessary to inform period');
    }

    const transactions = await service.getTransactions(period);
    res.json(transactions);
  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
});

transactionRouter.post('/', async (req, res, next) => {
  try {
    const transaction = req.body;
    const createdTransaction = await service.createTransaction(transaction);
    res.json(createdTransaction);
  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
});

transactionRouter.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const transaction = req.body;
    const updatedTransaction = await service.updateTransaction({ id, transaction });
    res.json(updatedTransaction);
  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
});

transactionRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTransaction = await service.deleteTransaction(id);
    if (!deletedTransaction) {
      throw new Error('Error to delete transaction');
    }
    res.json(deletedTransaction);
  } catch (err) {
    console.log(err)
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
});

module.exports = transactionRouter;
