
// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import connectDB from './db/dbConnect.js';
import app from './app.js';

import fs from 'fs';
import path from 'path';

const tempDir = path.join(process.cwd(), 'public', 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
  console.log('Created temp directory:', tempDir);
}


dotenv.config({
    path:'./env'
})




connectDB()
.then(() => {
    
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server running on port ${process.env.PORT}`);
    })

    //  app.on('Error',(err)=>{
    //     console.log('error',err)
    //     throw  err
    // })
})
.catch( (err) => {
        console.log("MongoDB connection Failed !!! " , err)
    }
)
