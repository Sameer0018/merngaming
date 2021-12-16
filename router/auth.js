const express = require('express');
const router = express.Router();
const Registration = require("../models/userschema");
const authenticate = require('../middleware/authenticate');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');

//get measn read
require('../db/conn');


const User = require('../models/userschema');


router.get('/', (req , res) =>{
 res.send(`Hello from the  Home auth.js`);

} );


// router.post('/register',(req,res)=> {

// const {name, email, phone, work, password, cpassword}= req.body;

// if(!name || !email || !phone || !work || !password ||  !cpassword){
//     return res.status(422).json( {error:"plz fill the detail"});
// }

// User.findOne({email:email})
// .then((userExist) => {
//     if(userExist){
//         return res.status(422).json({error:"Email is already Exist"});

//     }
// const user = new User({name, email, phone, work, password, cpassword});

// user.save().then(() => {
//     res.status(201).json({message: "succesfully resgister"});

// }).cath((err) => res.status(500).json({error:"failed to registerd"}) );


// } ).catch(err => {console.log(err); 
// });



    // console.log(req.body.name);
    // console.log(req.body.email);

    //  res.json({message:req.body});

//   res.send("mera register page");

//});




















//Async-Await
router.post('/register',async(req,res) => {
    const {name, email, phone, work, password, cpassword}= req.body;

    if(!name || !email || !phone || !work || !password ||  !cpassword) {
        return res.status(422).json( {error:"plz fill the detail"});
    }
    try{
        const userExist =await User.findOne({email: email});
        if(userExist){
            return res.status(422).json({error: "Emial already register"});

        }else if(password != cpassword){
            return res.status(422).json({error: "Emial already register"});

        } else{
    const user =new User({name, email, phone, work, password, cpassword});
    await user.save();
// console.log(`${user} user Registered successfully`);
// console.log(userRegister);


     res.status(201).json({message: "user registers successfilly"});
     
        }
    }catch (err) {
        console.log(err);
    }
});

//login route

router.post('/signin', async (req,res) => {

// console.log(req.body);
// res.json({message:"awesome"})


try {
    let token;
    const { email,password} = req.body;
     
    if(!email ||  !password) {
      return res.status(400).json({error:"plz fill the data"})
}

//checking email and password

const userLogin =  await User.findOne({email: email});

if(userLogin) {
    
const isMatch = await bcrypt.compare(password, userLogin.password);

 token = await  userLogin.generateAuthToken();
console.log(token);

// console.log(cookie);



res.cookie("jwtoken",token, {
    expires:new Date(Date.now() + 25892000000),
    

    httpOnly:true

    
});

if(!isMatch){
    res.status(400).json({message:"Invalid credientials"});


}else { 
     res.json({message:"user Signin is successfully"});
} 

     
}else{
    res.status(400).json({message:"Invalid credientials"});

}


// console.log(userLogin);


}catch(err){
    console.log(err);
}
});




// about page middleware


router.get('/about',authenticate, (req , res) =>{
    console.log(` Hello my About  `); 
    // res.send(`Hello from the  about from the server`);
   res.send(req.rootUser);
   } );


router.get('/getdata',authenticate,(req, res) =>
{
    console.log(`Hello my about`);
    res.send(req.rootUser);
} );




module.exports =  router;