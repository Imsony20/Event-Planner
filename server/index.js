import dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import connectDB from './src/config/db.js';
import authroutes from './src/router/authRoutes.js'

const app = express();

app.use(express.json());

app.use("/auth",authroutes);

app.get("/",(req,res)=>{
    res.json({message:"Server connected"});
});


app.use((err,req,res,next)=>{
     const errorMessage = err.message ||"Internal Server Error"
     
     const errorCode=err.statusCode  ||500;
     res.status(errorCode).json({message:errorMessage})
     
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server started at", port);
    connectDB();
});