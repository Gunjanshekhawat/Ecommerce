import USER from '../models/UserModel.js'
import validator from 'validator'
import createToken from '../config/token.js'
import bcrypt from 'bcryptjs'
import { genToken } from '../config/token.js'


export const registration=async(req,res)=>{
    try{
         const {name,email,password}=req.body;
         const existuser=  await USER.findOne({email})
         if(existuser)
         {
               return res.status(400).json({message:"user already exists"})
         }
        if(!validator.isEmail(email))
        {
                return res.status(400).json({message:"enter valid email"})
        }
        if(password.length<8)
        {
           return res.status(400).json({message:"enter strong password"}) 
        } 
        let hashPassWord= await bcrypt.hash(password,10)
        const user=await USER.create({
            name,email,password:hashPassWord
        })  
        const token=createToken(user._id);
         res.cookie("uuid",token,{
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })
        return res.status(201).json({
            message: "Registration successful",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            },
            token
        });
        
    }
    catch(error)
    {
          console.log("register error");
          return res.status(500).json({message:`register error ${error}`})
    }
}

export const login=async(req,res)=>{
    try
    {
        const {email,password}=req.body;
        const user=await USER.findOne({email})
        if(!user)
        {
         return res.status(404).json({message:"user doesn't exists"})
        }
        const isMatch=bcrypt.compare(password,user.password)
        if(!isMatch)
        {
             return res.status(400).json({message:"password is wrong"}) 
        }
         const token=createToken(user._id);
         res.cookie("uuid",token,{
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })
        return res.status(201).json({
            message: "login successful"});
    }
    catch(error)
    {
          console.log("login error");
          return res.status(500).json({message:`login error ${error}`})
    }

}
export const logout=(req,res)=>{
   try
   {
    res.clearCookie("uuid")
     return res.status(200).json({message:"logout successful"})
   }
   catch(error)
   {
          console.log("logout error");
          return res.status(500).json({message:`logout error ${error}`})
   }
}
export const googleLogin=async(req,res)=>{
     try {
        let {name,email}=req.body;
        let user=await USER.findOne({email})
        if(!user)
        {
            user=await USER.create({
                name,email,
                   password: "GOOGLE_AUTH" 
            })
        }
       
        
         const token=createToken(user._id);
         res.cookie("uuid",token,{
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })
        return res.status(201).json(user);
    }
    catch(error)
    {
       console.log("googlelogin error");
       console.log(error)
          return res.status(500).json({message:`googlelogin error ${error}`})   
    }
     
}
export const adminLogin=async(req,res)=>{
    try {
        let {email,password}=req.body;
        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD)
        {
        const token=genToken(email);
         res.cookie("uuid",token,{
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge:1*24*60*60*1000
        })
        return res.status(201).json(token);
        }
        return res.status(400).json({message:"Invalid Credentials"})
        
    } catch (error) 
    {
        console.log("adminlogin error");
       console.log(error)
          return res.status(500).json({message:`adminlogin error ${error}`})      
    }
}