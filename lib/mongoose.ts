import mongoose from 'mongoose';

let isConnected = false; //track connection status

export const connectToDB = async () => {
  mongoose.set('strictQuery', true); //to prevent unknown field query

  if (!process.env.MONGODB_URI) {
    return console.log('MONGODB_URI is not defined');
  }

  if (isConnected) {
    return console.log('=> using existing database connection');
  }

  try {
    // if we are conneted and dont have mongodb_uri
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('=> MongoDB Connected <=');

    isConnected = true;
    console.log('mongoDB Connected');
  } catch (error: any) {
    console.log(error.message);
  }
};
