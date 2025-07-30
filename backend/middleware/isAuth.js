import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const isAuth=async(req,res,next)=>{
        try {
          let { uuid: token } = req.cookies;
         console.log(token)

           if(!token)
           {
              console.log(token)
              return res.status(400).json({Message:"user does not have not token"})
           }
           let verifyToken=jwt.verify(token,process.env.JWT_SECRET);
           if(!verifyToken)
           {
             return res.status(400).json({Message:"user does not have not  valid token"})
           }
           console.log("Decoded token:", verifyToken)
           req.userId=verifyToken.id;
          console.log("Assigned req.userId:", req.userId);


           next();
        } 
        catch (error) 
        {
           console.log( "isAuth error");
           return res.status(500).json({message:`isAuth error ${error}`}) 
        }
}
export default isAuth;