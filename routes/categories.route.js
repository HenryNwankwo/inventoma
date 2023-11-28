const {
  getAllCategories,
  addCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
} = require('../controllers/categories.controller');

const router = require('express').Router();

/*==========================
==== CATEGORIES ROUTES ====
=========================*/

//GET all categories and add a category
router.route('/').get(getAllCategories).post(addCategory);

//GET, UPDATE, DELETE category by ID
router
  .route('/:id')
  .get(getCategoryById)
  .put(updateCategoryById)
  .delete(deleteCategoryById);

module.exports = router;
