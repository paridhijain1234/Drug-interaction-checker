const mongoose= require("mongoose");
const userschema = new mongoose.Schema({
    Username :{
        type: String,
        required : true 
    },
    Email:{
        type: String,
        required:true,
        unique: true

    },
    Password:{
        type: String,
        required:true,
        
    },
    ConfirmPassword:{
        type:String,
        required:true


    }
})
const Register = new mongoose.model("User",userschema );
module.exports= Register;