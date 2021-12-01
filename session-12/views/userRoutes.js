const express = require("express");
const router = express.Router();
const userSchema = require("../model/userModel")
const { body, validationResult } = require('express-validator');

router.post("/register" , 
body('email')  ,
body('name').isLength({ min: 5 })
, (req,res) =>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = new userSchema(req.body)    
    user.save(  (err,user) => {
        if(err){
            res.json(err)
        }else{
            res.json(user)
        }
    }  )
}  )

router.get("/getUsers" , (req,res) => {
    userSchema.findOne( { name : "mark" } , (err,users) => {
        if(err){
            res.json(err);
        }else{
            res.json(users);
        }
    }   )
} )

router.get("/getAUser/:id"  , (req,res) => {
    const id = req.params.id
     userSchema.findOne(  {_id : id } , (err,user) => {
         if(err){
             res.json(err)
         }else{
             res.json(user)
         }
     }  )
}  )


router.put( "/updateUser/:id" , (req,res) => {
    userSchema.findOneAndUpdate( { _id : req.params.id  } , req.body ,  (err) => {
        if(err){
            res.json(err)
        }else{
            res.json("updation success")
        }
    }   )
}  )

router.delete("/deleteUser/:id" , (req,res) => {
    userSchema.findOneAndDelete({ _id : req.params.id  }  , (err,deletedUser) => {
        if(err){
            res.json(err)
        }else{
            if(deletedUser == null){
                res.json("no user available with id " + req.params.id)
            }else{
                res.json("deletion success")
            }
        }
    }  )
} )

module.exports = router