const express = require('express');
const router = new express.Router();
const Student = require("../models/students");
module.exports = router;
router.post("/students",(req,res)=>{
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(()=>{
    res.status(201).send(user);
    }).catch((err)=>{
        console.log(err);
        res.status(400).send(err);
     //throw new Error(err);
    })

});
router.get("/",(req,res)=>{
    res.send("hello king");
})
router.get("/king",(req,res)=>{
    res.send("jai hind");
})

router.get("/students",async(req,res)=>{
    try{
     const data = await Student.find();
     res.status(200).send(data);
    }catch(err){
       res.status(400).send();
    }
    
    
})

router.get('/students/:id',async(req,res)=>{
    try{
         const _id = req.params.id;
         console.log(_id);
         //res.send(req.params.id);
       const data = await Student.findById(_id);
        res.status(200).send(data);
    }catch(err){

    }
})
router.patch("/students/:id",async(req,res)=>{
   try{
    const _id = req.params.id;
    
    console.log(_id);
    
    const updateStudents = await Student.findByIdAndUpdate(_id,req.body,{
        new:true
    })
    res.status(200).send(updateStudents);
    
   }
   catch(err){
    console.log(err);
    res.status(404).send(err);
   }
      
 
})
router.delete("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        console.log(_id);
        const deleteStudent = await Student.findByIdAndDelete(_id);
        if(!_id){
            res.status(404).send("something went wrong");
        }
        res.status(200).send(deleteStudent);
    }catch(err){
        res.status(500).send(err);
    }
})