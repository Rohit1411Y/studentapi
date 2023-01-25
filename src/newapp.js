const express = require("express");
//const newsStudent = require("./models/newStudents");
const app = express();
const port = process.env.PORT||3000;
require('./db/newConnection');
const newStudent = require('./models/newStudents');
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hello kaise ho aap log");
})
app.post("/students" , async(req,res)=>{
    console.log(req.body);
    try{
        const newUser = new newStudent(req.body);
        const getUser = await newUser.save();
        res.status(201).send(getUser);
    }catch(err){
        res.status(400).send(err);
    }
 
    

});
app.listen(port,()=>{
    console.log(`connection established at port : ${port}`);
})