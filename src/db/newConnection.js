const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
mongoose.connect("mongodb://localhost:27017/newstudents-api").then(()=>{
    console.log("connection Successful");
}).catch((err)=>{
    throw new Error("Something went wrong");
})