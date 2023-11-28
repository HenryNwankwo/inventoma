const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    type: {
      type: String,
      required: [true, 'Transaction type is required!'],
    },
    quantity: {
      type: Number,
      required: [true, 'Product quantity for this transaction is required!'],
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Transaction ||
  mongoose.model('Transaction', transactionSchema);
