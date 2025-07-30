import express from 'express'
const Router=express.Router()
import { addToCart,getUserCart,updateCart } from '../controllers/cartcontrller.js'
import isAuth from '../middleware/isAuth.js'
Router.post('/get',isAuth,getUserCart)
Router.post('/add',isAuth,addToCart)
Router.post('/update',isAuth,updateCart)
export default Router