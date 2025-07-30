import express from 'express'
import dotenv from 'dotenv'
import connect from './config/db.js';
import authRouter from './routes/authRoute.js'
import cookieparser from 'cookie-parser';
import cors from 'cors'
import userRouter from './routes/userRoute.js';
import ProductRouter from './routes/productRoutes.js';
import cartRouter from './routes/cartRoute.js'
import Router from './routes/orderRoute.js'
import isAuth from './middleware/isAuth.js';
dotenv.config()
const PORT=process.env.PORT||6000;
const app=express()

connect();

app.use(cookieparser())
app.use(express.json())
app.use('public', express.static('public'));
app.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
    credentials:true
}))

app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use('/api/product',ProductRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',Router)
app.listen(PORT,()=>{
    console.log(`server is lisening at ${PORT}`)
})
