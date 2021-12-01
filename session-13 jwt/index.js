// const express = require("express");
// const app = express();
// const port = 8080;
// var jwt = require('jsonwebtoken');

// app.use(express.json());


// app.post("/login" , (req,res) => {
//     const {email,password} = req.body
//     var token = jwt.sign( { email : email , isAdmin : false  }  , 'shhhhh'  , { expiresIn : "30s"  }  );
//     res.json(token)
// } )

// app.get("/productInfo" , (req,res) => {
//     var token = req.headers.authorization
//     if( token == undefined ){
//        return res.json("Login required")
//     }else{
//     try{
//     var decoded = jwt.verify(token, 'shhhhh');
//     res.json(decoded)
//     }catch(err){
//         res.json(err)
//     }
// }

// } )

// app.listen(port , () => {
//     console.log(`server started running on port ${port}`)
// } )

/*

registration

name : tom
email : tom@gmail.com
password : pass123

// stored in db 

name : tom
email : tom@gmail.com
password : $2b$10$k0DNFh1Zya9FdOEwiENZluwDAwJWWjPUR0OxoJjuIjaMKwga7dRse

// user tries to login 

email : tom@gmail.com
password : pass123

// getting user document from DB

name : tom
email : tom@gmail.com
password : $2b$10$k0DNFh1Zya9FdOEwiENZluwDAwJWWjPUR0OxoJjuIjaMKwga7dRse


*/

const bcrypt = require('bcrypt');

// const hashPassword = bcrypt.hashSync(  "pass123" , 10);

// console.log(hashPassword)

const result = bcrypt.compareSync( "pass123456" , "$2b$10$k0DNFh1Zya9FdOEwiENZluwDAwJWWjPUR0OxoJjuIjaMKwga7dRse" )

console.log(result)

