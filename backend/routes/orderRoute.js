import express from 'express'
const Router =express.Router()
import {placeorder,userOrders ,allOrders, updateStatus, placeOrderPay, verifyRazorPay}from '../controllers/orderController.js'
import isAuth from '../middleware/isAuth.js'
import adminAuth from '../middleware/adminauth.js'

Router.post('/placeOrder',isAuth,placeorder)
Router.post('/RazorPay',isAuth,placeOrderPay)
Router.post("/userorder",isAuth,userOrders)
Router.post("/verify",isAuth,verifyRazorPay)

Router.post("/list",adminAuth,allOrders)
Router.post("/status",adminAuth,updateStatus)


export default Router