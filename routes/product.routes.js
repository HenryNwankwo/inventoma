const router = require('express').Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProduct,
} = require('../controllers/product.controller');

/**********************
 *** PRODUCT ROUTES ****
 **********************/

//For getting all products and creating a new product
router.route('/').get(getAllProducts).post(createProduct);

//For getting, updating and deleting product by ID
router
  .route('/:id')
  .get(getProductById)
  .put(updateProductById)
  .delete(deleteProduct);

module.exports = router;
