import jwt from 'jsonwebtoken'
const adminAuth=async(req,res,next)=>{
    try {
        let token=req.cookies.uuid;
        if(!token)
        {
           return res.status(400).json({message:"not authorised, login again"})
        }
        let verifyToken=jwt.verify(token,process.env.JWT_SECRET)
        if(!verifyToken)
        {
           return res.status(400).json({message:"invalid token,login again"})
        }
        req.adminEmail=process.env.ADMIN_EMAIL;
        next()

        
    } catch (error) {
        console.log( "adminAuth error");
        console.log(error)
           return res.status(500).json({message:`adminAuth error ${error}`}) 
        
    }
    
}
export default adminAuth