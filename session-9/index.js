// const express = require("express");
// const app = express();
// const port = 8080;


// app.use(  express.static( __dirname + "/public"  )   )

// app.get("/" , (req,res) => {
//     res.sendFile(  __dirname + "/public/index.html"  )
// } )

// // console.log( "path till index file " + __dirname + "/public/index.html"  )

// app.listen(port , () => {
//     console.log(`server started running on port ${port}`)
// }  )









// const express = require("express");
// const app = express();
// const port = 8080;
// const mysql = require("mysql");

//  const db =  mysql.createConnection({
//           host : "localhost",
//           user : "testUser",
//           password : "123456aA$"
//       });

//       db.connect( (err) => {
//           if(err){
//               console.log(err)
//           }else{
//               console.log("DB Connected");
//           }
//       }  )   
      
//       app.get("/companyDetails", (req,res) => {
//         let sqlQuery = `SELECT * FROM world.company;`
//         db.query( sqlQuery , (err,data) => {
//             if(err){
//                 res.json(err)
//             }else{
//                 res.json(data);
//             }
//         }   )
//       } )

//       app.get("/countries" , (req,res) => {
//           let sqlQuery = `SELECT * FROM world.country;`
//           db.query( sqlQuery , (err,data) => {
//             if(err){
//                 res.json(err)
//             }else{
//                 res.json(data);
//             }
//           }  )
//       } )

//       app.listen(port, () => {
//           console.log(`server started running on port ${port}`)
//       } )










// const express = require("express");
// const app = express();
// const port = 8080;
// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://dbUser:12345@cluster0.fz5sl.mongodb.net/dbName?retryWrites=true&w=majority",
// {  useNewUrlParser : true , useUnifiedTopology : true  })
// .then( () => {
//     console.log("DB Connected")
// }  ).catch( (err) => {
//     console.log(err);
// }  )

// app.listen( 8080 , () => {
//     console.log(`server started running on port 8080`)
// } )






// const express = require("express");
// const app = express();
// const port = 8080;

// app.set("view engine","ejs");

// app.get("/" , (req,res) => {
//     res.render("index.ejs" , {
//         title  : "welcome to ejs",
//         names : [ "jack" , "bill" , "robert" ]
//     }   )
// } )

// app.listen( port , () => {
//         console.log(`server started running on port 8080`)
//     } )




