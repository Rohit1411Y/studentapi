const mongoose = require("mongoose");
const validator = require("validator");
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:24
    },
    email:{
        type:String,
        required:true,
        unique:[true,"User with this email already exist"],
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

const Student = new mongoose.model("Student",studentSchema);
module.exports = Student;