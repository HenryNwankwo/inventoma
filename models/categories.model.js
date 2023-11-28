const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required!'],
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Category || mongoose.model('Category', categorySchema);
