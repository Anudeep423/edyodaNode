const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const {registerUser,userLogin,usersDetails} = require("../controller/userController");
const jwt = require("jsonwebtoken");
const userSchema = require("../model/userSchema");




router.post("/register", body("email").isEmail(), registerUser);

router.post("/login" , userLogin);

router.get("/users" ,usersDetails  )
 
 

module.exports = router;
