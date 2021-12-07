// 1) create a "/Register" post route with the user 
// details - name, email,password , confirm password, isAdmin
// name - should be in String format,
// email - should be in email format , 
// isAdmin - should be boolean.
// password and confirm password should match ,
// store hashed password in db.
// if all conditions are satisfied send relevant status code else give 
// proper error message to the client

const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const userRoutes = require("./views/userRoutes")

mongoose.connect("mongodb+srv://dbUser:12345@cluster0.fz5sl.mongodb.net/dbName?retryWrites=true&w=majority")
.then( () => {
    console.log(`DB Connected`)
}).catch( (err) =>{
    console.log(err)
});

app.use( express.json() )

app.use(userRoutes);

app.listen( port , () => {
    console.log(`server started running on port ${port}`)
} )