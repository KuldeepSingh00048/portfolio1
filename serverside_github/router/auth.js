const express= require('express');
const router = express.Router();
const User=require('../model/user_schema')

router.post('/review', (req,res) =>{
    const{name,email,feedback} = req.body
    const user = new User({name,email,feedback})
    user.save(err => {
        if(err){
            res.send(err)
        }
        else{
            res.send({message: "Thanks for your Valueable review", user:user})
        }
    })
})
router.post('/contact', (req,res) =>{
    const{name,email,Phone_number} = req.body
    const user2 = new User({name,Phone_number,email})
    user2.save(err => {
        if(err){
            res.send(err)
        }
        else{
            res.send({message: "We will contact you soon", user:user2})
        }
    })
})

module.exports=router





















































// const bycrypt  = require('bcryptjs')
// require('../database_mongoose/DBconnection');
//for connecting with database atlas for storing the data of user
// const jwt = require('jsonwebtoken')
// //registered route

// router.post('/register', async (req,res) =>{
//    // console.log('this is post request from user for registration');
//    const { name,email,phone,password,cpassword}= req.body;

//    if(!name|| !email|| !phone|| !password|| !cpassword)
//    {
//     return res.status(401).json({error : "all detail have not filled"});
//    }

//    try{

//        const userExist= await User.findOne({email:email})
//        if(userExist)
//        {
//            return res.status(221).json({error:"email already exist"});
//         }
//         else if(password != cpassword)
//         {
//             return res.status(222).json({error:"please confirm your password correctly"});
//         }
//         else
//         {
//             const user= new User({name,email,phone,password,cpassword});
//             await user.save()
//             res.status(207).json({message:"user registered successfully"})
//         }
//     }
//    catch{
//         console.log(error);
//     }
    
// })


// // login route

// router.post('/login',async (req,res) =>{
//     try{
//         const {email,password} = req.body;
//         if(!email||!password)
//         {
//             return res.status(400).json({error:"please fill your credentials"})
//         }
//         const userlogin = await User.findOne({email:email});
//         console.log(userlogin)

//         const passmatch = await bycrypt.compare(password,userlogin.password);
//         if(!passmatch)
//         {
//             return res.status(404).json({error:'wrong password'})
//         }
//         else if(!userlogin){
//             return res.status(404).json({error:'sign up first'})
//         }
//         else
//         {   
//             const token = await userlogin.generateAuthToken();
//             console.log('token')
//             res.json({message :"login successfully"})
//         }
//     }
//     catch(error)
//     {
//         console.log(error)
//     }
    
// })
