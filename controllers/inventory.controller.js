const asyncHandler = require('express-async-handler');

/*=========================
== INVENTORY CONTROLLERS ==
=========================*/

//Get all Inventories
const getAllInventory = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'All Inventories' });
});

const adjustInventoryByProductId = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Adjusted the product!' });
});

module.exports = { getAllInventory, adjustInventoryByProductId };
