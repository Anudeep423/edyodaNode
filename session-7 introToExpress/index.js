const express = require("express");
const app = express();
const port = 8080;
const userRoutes = require("./routes")

app.use(express.json());

app.use(userRoutes);

app.get("/" , (req,res) => {
    res.send("server started")
});



app.use( "*" , (req,res) => {
res.status(404).send("404 not found")
} )


app.listen(port , () => {
    console.log(`server starting running on port ${port}`)
}   )