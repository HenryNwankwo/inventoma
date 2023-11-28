const asyncHandler = require('express-async-handler');

/*=================================
==== TRANSACTIONS CONTROLLERS =====
=================================*/

//Get all transactions
const getAllTransactions = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'All Transactions!' });
});

//Add sales transaction

const addSalesTransaction = asyncHandler(async (req, res) => {
  res.status(201).json({ message: 'Sale Transaction added!' });
});

//Add Purchase transactions

const addPurchaseTransaction = asyncHandler(async (req, res) => {
  res.status(201).json({ message: 'Purchase Transaction added!' });
});

module.exports = {
  getAllTransactions,
  addPurchaseTransaction,
  addSalesTransaction,
};
