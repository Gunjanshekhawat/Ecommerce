/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './Authcontext'
import axios from 'axios'
export const shopDataContext=createContext()
import { userDataContext } from './UserContext'
import {toast} from 'react-toastify'
import { getUserCart } from '../../../backend/controllers/cartcontrller'
function Title({children}) {
    let [products,setProducts]=useState([])
    let[showSearch,setshowSearch]=useState(false)
    let[search,setsearch]=useState('')
    let {userData}=useContext(userDataContext)
       let [cartItem,setCartItem]=useState({})
    let {url}=useContext(authDataContext)
    let currency='₹'
    let delievery_fee=40
    const getProducts=async()=>{
       try {
          let result=await axios.get(url+'/api/product/list',{withCredentials:true})
        
          setProducts(result.data)
       } catch (error) {
         console.log(error)
       }
    }
    const addToCart= async(itemId,size)=>{
          if(!size)
          {
            console.log("select Product Size")
            return
          }
          let cartData=structuredClone(cartItem)
          if(cartData[itemId])
          {
            if(cartData[itemId][size])
            {
              cartData[itemId][size]+=1
            }
            else{
              cartData[itemId][size]=1
            }
          }
          else{
            cartData[itemId]={}
            cartData[itemId][size]=1
          }
         
          setCartItem(cartData)
           if(userData)
           {
          
            try {
             let result= await axios.post(url+'/api/cart/add',{itemId,size},{withCredentials:true})
              console.log(result)
              
            } catch (error) {
              console.log(error)
              toast.error(error.message)
              
            }
          }
       
          
    }
    const getCartCount=()=>{
      let totalCount=0;
      for(const items in cartItem)
      {
        for(const item in cartItem[items])
        {
          try {
            if(cartItem[items][item]>0)
            {
              totalCount+=cartItem[items][item]
            }
          } catch (error) {
            console.log(error)
          }
        }
      }
       return totalCount;
    }
       const getUserCart=async()=>{
              try{
                 const result=await axios.post(url+'/api/cart/get',{},{withCredentials:true})
                 setCartItem(result.data)
              }
              catch(error)
              {
                    console.log(error)
                    toast.error(error.message)
              }
          }
    const updateQuantity=async(itemId,size,quantity)=>{
      let cartData=structuredClone(cartItem);
      cartData[itemId][size]=quantity
      setCartItem(cartData)  
      if(userData)
      {
            try {
              await axios.post(url+'/api/cart/update',{itemId,size,quantity},{withCredentials:true})
            } catch (error) {
              console.log(error)
              toast.error(error.message)

            }
      }  
           
    }
     const getCartAmount=()=>{
      let totalAmount=0;
      for(const items in cartItem)
      {
             let itemInfo =products.find((product)=>product._id===items)
             for(const item in cartItem[items])
             {
               try {
                if(cartItem[items][item]>0)
                {
                  totalAmount+=itemInfo.price*cartItem[items][item]
                }
                
               } catch (error) {
                 console.log(error)
               }
             }
      }  
      return totalAmount;
    }
    useEffect(()=>{
      getProducts()
    })
    useEffect(()=>{
      getUserCart()
    })
   
    let value={
        currency,delievery_fee,products,setProducts,getProducts,setsearch,setshowSearch,showSearch,search,addToCart,getCartCount,setCartItem,cartItem,updateQuantity,getCartAmount
    }
  return (

    <div>
        <shopDataContext.Provider value={value}>
            {children}
        </shopDataContext.Provider>
    </div>
  )
}

export default Title