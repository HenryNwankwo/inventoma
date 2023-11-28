const asyncHandler = require('express-async-handler');

const getAllProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'This is all products!' });
});

const getProductById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'This is get product by id' });
});

const createProduct = asyncHandler(async (req, res) => {
  res.status(201).json({ message: 'Product added successfully!' });
});

const updateProductById = asyncHandler(async (req, res) => {
  res.status(201).json({ message: 'Product updated successfully' });
});

const deleteProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Product deleted!' });
});

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProduct,
};
