import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.URL_DB, () => {
  console.log('database is connected....');
});
