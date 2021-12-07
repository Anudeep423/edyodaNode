const mongoose = require("mongoose");
// name - should be in String format,
// email - should be in email format , 
// isAdmin - should be boolean.
// password and confirm password should match ,
// store hashed password in db.
const userSchema = new mongoose.Schema({
   name : {
       required : true,
       type : String
   },
   email : {
       type : String,
       required : true
   },
   isAdmin : {
       type : Boolean,
       required : true
   },
   password : {
       type : String,
       required : true
   }
});

module.exports = mongoose.model("user" , userSchema )