import dotenv from 'dotenv'
dotenv.config()
import jwt  from 'jsonwebtoken'
const createToken=(userId)=>{
    try{
      const token=jwt.sign({id:userId},process.env.JWT_SECRET,{expiresIn:"7d"})
         return token;
    }
    catch(error)
    {
        console.log(error)
        console.log("token error")
    }
}
export const genToken=(email)=>{
    try{
      const token=jwt.sign({email},process.env.JWT_SECRET,{expiresIn:"7d"})
         return token;
    }
    catch(error)
    {
        console.log(error)
        console.log("token error")
    }
}

export default createToken;