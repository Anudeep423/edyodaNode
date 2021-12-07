const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
const userSchema = require("../model/userSchema")
const jwt = require("jsonwebtoken")

const registerUser = (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {name,email,isAdmin,password,confirmPassword} = req.body
    if( password !== confirmPassword){
        return res.send("password and confirm password do not match")
    }
    var hashPassword = bcrypt.hashSync(password, 10);
    const user = new userSchema({ name, email , isAdmin , password :  hashPassword  })
    user.save( (err,user) => {
        if(err){
            res.json(err)
        }else{
            res.json({ message : "user registered succesfully"  , user  })
        }
    }  )
}

const userLogin = async (req,res) => {
    const {email,password} = req.body;

    if( !email || !password ){
        if(!email){
           return res.send("email required")
        }else if(!password){
            return res.send("password required")
        }
    }
   const user =  await userSchema.findOne( { email : email });

   if(!user){
    return  res.send("no user registered with this email")
   }
  const result =  bcrypt.compareSync(password,user.password);
  if(result == false){
    return res.send("incorrect password")
  };

 const token =  jwt.sign( { email : user.email , isAdmin : user.isAdmin  } , "shhh"  );
 res.send(token)
}

module.exports = {
    registerUser,
    userLogin
}