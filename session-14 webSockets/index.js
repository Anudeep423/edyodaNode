const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http)
const port = 8080;


app.use(express.static(  __dirname + "/public" ));


io.on("connection" , (socket) => {
     io.emit("status" , "user connected" , "test msg"  );
    console.log("client connected")
    socket.on("message" , (msg) => {  
        console.log(msg); 
          io.emit("message" , msg  )
    } ) 

    socket.on("disconnect" , () => { 
     
        io.emit("disconnection", "user disconnected")
  } )
  
} )

http.listen(port , () => {
    console.log(`server started running on port ${port}`)
} )



