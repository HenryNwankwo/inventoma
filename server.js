const express = require('express');
const dotenv = require('dotenv').config();
const connectToDB = require('./config/dbConnection');
const productRoutes = require('./routes/product.routes');
const inventoryRoutes = require('./routes/inventory.routes');
const transactionRoutes = require('./routes/transactions.route');
const categoriesRoutes = require('./routes/categories.route');

const port = process.env.PORT || 3000;
const app = express();

//Connecting to database
connectToDB();

//middlewares
app.use(express.json());
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/inventory', inventoryRoutes);
app.use('/api/v1/transactions', transactionRoutes);
app.use('/api/v1/categories', categoriesRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
