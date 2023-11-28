const {
  getAllTransactions,
  addSalesTransaction,
  addPurchaseTransaction,
} = require('../controllers/transactions.controller');

const router = require('express').Router();

/*=============================
===== TRANSACTIONS ROUTES =====
=============================*/

//Get all transactions

router.route('/').get(getAllTransactions);

//Add sales transaction

router.route('/sale').post(addSalesTransaction);

//Add purchase transactions
router.route('/purchase').post(addPurchaseTransaction);

module.exports = router;
