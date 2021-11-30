const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    roll : {
        type : Number,
        required : true
    }
})

 module.exports = mongoose.model("user" , userSchema )