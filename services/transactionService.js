const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const TransactionModel = require('../models/TransactionModel');

class Service {
  async createTransaction(transaction) {
    const newTransactionId  = await TransactionModel.create(transaction);
    const createdTransaction = TransactionModel.findById(newTransactionId);
    return createdTransaction;
  }

  async getTransactions(period) {
    return TransactionModel.find({ yearMonth: period });
  }

  async updateTransaction({ id, transaction }) {
    await TransactionModel.findByIdAndUpdate(id, transaction);
    return TransactionModel.findById(id);
  }

  async deleteTransaction(id) {
    return TransactionModel.findByIdAndDelete(id);
  }
}

module.exports = Service;