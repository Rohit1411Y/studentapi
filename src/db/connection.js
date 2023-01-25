const mongoose = require('mongoose');

mongoose.set('strictQuery',true);
mongoose.connect("mongodb+srv://Rohit:rohit123@cluster0.zlv4i0u.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connection Successful");
}).catch((err)=>{
    throw new Error("Something went wrong");
})