const mongoose = require('mongoose');

let isConnected = false;

const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is Already Connected!');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: 'inventoma' });

    isConnected = true;
    console.log('MONGODB IS CONNECTED!');
  } catch (err) {
    console.log('DB Connection Error: ', err);
  }
};

module.exports = connectToDB;
