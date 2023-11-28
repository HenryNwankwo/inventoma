const express = require('express');
const dotenv = require('dotenv').config();
const connectToDB = require('./config/dbConnection');
const productRoutes = require('./routes/product.routes');
const inventoryRoutes = require('./routes/inventory.routes');

const port = process.env.PORT || 3000;
const app = express();

//Connecting to database
connectToDB();

//middlewares
app.use(express.json());
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/inventory', inventoryRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
