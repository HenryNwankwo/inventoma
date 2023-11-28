const {
  getAllInventory,
  adjustInventoryByProductId,
} = require('../controllers/inventory.controller');

const router = require('express').Router();

/*=========================
==== INVENTORY ROUTES =====
=========================*/

//Get all inventory
router.route('/').get(getAllInventory);

//adjust the inventory of a product
router.route('/:id/adjust').post(adjustInventoryByProductId);

module.exports = router;
