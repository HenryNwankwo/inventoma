const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required!'],
    },
    description: {
      type: String,
      required: [true, 'Product name is required!'],
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
    price: {
      type: Number,
      required: [true, 'Product price is required!'],
    },
    quantity: {
      type: Number,
      required: [true, 'Product quantity is required!'],
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Product || mongoose.model('Product', productSchema);
