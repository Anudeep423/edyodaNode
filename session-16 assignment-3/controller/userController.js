const userSchema = require("../model/userSchema");
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const registerUser = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, isAdmin, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return res.status(406).send("password and confirm password do not match")
    }
    var hashedPassword = bcrypt.hashSync(password, 10);
    const user = new userSchema({ name, email, isAdmin, password: hashedPassword });
    user.save((err, user) => {
        if (err) {
            return res.json(err)
        } else {
            return res.status(201).json({ message: "user registered", user })
        }
    })
} 

const userLogin = async (req,res) => {
    const  {email , password } = req.body;
    if(!email || !password){
        if(!email){
           return res.send("email required")
        }else if(!password){
           return res.send("password required")
        }
    }
   const user =  await userSchema.findOne( { email : email  } )
   if(user == null ){
      return res.status(404).json({ error : "no user is registered with this email " })
   }
   const result = bcrypt.compareSync(password  , user.password )
   if(result == true){
   const token =  jwt.sign( { email : user.email , isAdmin : user.isAdmin } , "shhh"  );
   res.json(token);
   }else{
    return res.status(417).send("incorrect password")
   }
}

const usersDetails = (req,res) =>{
    const token = req.headers.authorization;
    if(!token){
        return res.send("login required")
    }
    try{
   const decoded =  jwt.verify(token,"shhh");
   if(decoded.isAdmin == false){
      return res.send("you are not an admin")
   }else{
      userSchema.find( {} , (err,users) => {
          if(err){
              res.json(err)
          }else{
              res.json(users)
          }
      } )
   }
   
    }catch(err){
        res.send("invalid token")
    }
}

module.exports = {
    registerUser,
    userLogin,
    usersDetails
}