const exp=require('express');
const mongoose=require('mongoose'); 
mongoose.set('strictQuery',true);
const connectDB= ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/ehr-pro");
    console.log("connected");
}

module.exports=connectDB;