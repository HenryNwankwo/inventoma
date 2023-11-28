const asyncHandler = require('express-async-handler');

/*==============================
==== CATEGORIES CONTROLLERS ====
==============================*/

//For getting all categories
const getAllCategories = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'All Categories' });
});

//For getting a category by its ID
const getCategoryById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Category by ID' });
});

//For adding a new category
const addCategory = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Category added successfully!' });
});

//For updating a category by its ID
const updateCategoryById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Category updated successfully!' });
});

////For deleting a category by its ID
const deleteCategoryById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Category deleted successfully!' });
});

module.exports = {
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategoryById,
  deleteCategoryById,
};
