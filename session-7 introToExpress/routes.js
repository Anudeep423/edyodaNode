const express = require("express");

const router = express.Router();

router.get("/users" , (req,res) => {
    res.json([ {name : "rahul"} , {  name : "joe" }   ]  )
} );

// app.post( "/register" , (req,res ) => {
//     console.log(req.body)
//     res.send("got the data");
// } )

router.post ( "/register" , (req,res ) => {
        console.log(req.body)
        res.send("got the data");
    }  );
    
module.exports = router

