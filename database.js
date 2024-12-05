const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect('mongodb+srv://AbdullahMashaan:Abdullah1991@cluster0.icwzx.mongodb.net/');
    console.log(`mongo connected: ${conn.connection.host}`);
  };

  module.exports = connectDB;
  