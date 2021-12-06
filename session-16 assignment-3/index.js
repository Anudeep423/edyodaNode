const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const userRoutes = require("./views/userRoutes");
const http = require("http");

console.log( http.STATUS_CODES );

mongoose.connect("mongodb+srv://dbUser:12345@cluster0.fz5sl.mongodb.net/dbName?retryWrites=true&w=majority")
.then( () => {
    console.log(`DB Connected`);
} )
.catch( err => {
    console.log(err)
} )
app.use( express.json() );
app.use(userRoutes);

app.listen( port , () => {
    console.log(`server started running on port ${port}`)
} )