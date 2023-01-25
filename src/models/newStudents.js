const mongoose = require("mongoose");
const validator = require("validator");
const studentBluePrint = new mongoose.Schema({
 name:{
    type:String,
    required:true,
    minlength:3,
    maxlength:24
 },
 email:{
    type:String,
    required:true,
    unique:[true,"Email already registered"],
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("invalid email");
        }
    }
 },
 phone:{
    type:Number,
    required:true
    
 },
 address:{
    type:String,
    required:true
 }
})
const newStudent = new mongoose.model("newStudent",studentBluePrint);
module.exports = newStudent;