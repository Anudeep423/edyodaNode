const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
const userSchema = require("../model/userSchema")
const {registerUser,userLogin} = require("../controller/userController")
const jwt = require("jsonwebtoken")

// 3) create a "/users" get route to access all the users.
//  conditions -
// user accessing this route must be logged in and admin.

router.post("/register" , body("email").isEmail() , registerUser );

router.post("/login" , userLogin  )

router.get("/users" , (req,res) => {
    const token = req.headers.authorization;
    if(!token){
       return res.send("login required")
    }
    try{
    const decoded = jwt.verify(token,"shhh");
    if(decoded.isAdmin == false){
        return res.send("you are not an admin")
    }
    userSchema.find( {} , (err,users) =>{
        if(err){
            res.json(err)
        }else{
            res.json(users)
        }
    } )

    }catch(err){
        return res.send("invalid token")
    }

    
} )


module.exports = router;