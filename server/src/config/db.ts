// import mongoose from 'mongoose';
// export async function connectDB(){const uri=process.env.MONGODB_URI;if(!uri){console.warn('MONGODB_URI not set. Server will run without database persistence.');return;}await mongoose.connect(uri);console.log('MongoDB connected');}

import mongoose from 'mongoose';

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('MONGODB_URI not set. Server will run without database persistence.');
    return;
  }
  await mongoose.connect(uri);
  console.log('MongoDB connected');
}

