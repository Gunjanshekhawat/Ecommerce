import React, { useContext } from 'react'
import Title from '../components/Title'
import { useState } from 'react'
import CartTotal from '../components/cartTotal'
import razorpay from '../assets/razorpay.png'
import { shopDataContext } from '../context/Shopcontext'
import {useNavigate} from 'react-router-dom'
import { authDataContext } from '../context/Authcontext'
import axios from 'axios'


function PlaceOrder() {
    const {cartItem,products,getCartAmount,delievery_fee,setCartItem}=useContext(shopDataContext)
    let {url}=useContext(authDataContext)
    let [method ,setMethod]=useState('cod')
    let navigate=useNavigate()
    let [formData,setFormData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        Street:'',
        City:'',
        PinCode:'',
        Country:'',
        Phone:''

    })
    const initPay=async(order)=>{
        const options={
            key:import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount:order.amount,
            currency:order.currency,
            name:'Order Payment',
            description:'Order Payment',
            order_id:order._id,
            receipt:order.receipt,
            handler:async (response)=>{
                console.log(response)
                const {data}=await axios.post(url+'/api/order/verify',response,{withCredentials:true})
                if(data)
                {
                      navigate("/order")
                      setCartItem({})
                }  
            }
           
        }
      const rzp=new window.Razorpay(options)
                rzp.open()
    }
    const onChangeHandler=(e)=>{
               const name=e.target.name;
               const value=e.target.value;
               setFormData(data=>({...data,[name]:value}))
    }
    const onSubmitHandler=async(e)=>{
           e.preventDefault()
           try {
            let orderItems=[]
            for(const items in cartItem)
            {
                for(const item in cartItem[items])
                {
                     if(cartItem[items][item]>0)
                     {
                         const itemInfo=structuredClone(products.find(product=>product._id===items))
                         if(itemInfo)
                         {
                            itemInfo.size=item
                            itemInfo.quantity=cartItem[items][item]
                            orderItems.push(itemInfo)
                         }
                     }
                }
            }
           
            let orderData={
                address:formData,
                items:orderItems,
                amount:getCartAmount()+delievery_fee
            }
             console.log(orderData)
             console.log(method)
            switch(method)
            {
                case 'cod' :
                {
                    const result=await axios.post(url+"/api/order/placeorder",orderData,{withCredentials:true})
                    console.log(result.data)
                    if(result.data)
                     {
                    setCartItem("")
                    navigate("/order")
                    }
                    else{
                    console.log(result.data.message)
                    }
                   break;
                }
                 case 'razorpay' :
                {
                    const result=await axios.post(url+"/api/order/RazorPay",orderData,{withCredentials:true})
                    console.log(result.data)
                    if(result.data)
                    {
                        initPay(result.data)
                    }
                }
            }
            
           } catch (error) {
             console.log(error)
           }
    }
  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center flex-col lg:flex-row gap-[50px] relative'>
        <div className='lg:w-[50vw] w-[100%] h-[100%] flex items-center justify-center lg:mt-[0px] mt-[90px]'>
            <form action="" onSubmit={onSubmitHandler} className='lg:w-[70%] w-[95%] lg:h-[70%] h-[100%]'>
                <div className='py-[50px]'>
                    <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
                </div>
                <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
                    <input type="text" placeholder='firstName' className='w-[48%] h-[50px] rounded-md  shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px]' required  onChange={onChangeHandler} name='firstName' value={formData.firstName}/>
                   <input type="text" placeholder='lastName' className='w-[48%] h-[50px] rounded-md  shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px]' required  onChange={onChangeHandler} name='lastName' value={formData.lastName}/>
                   </div>
                    <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
                    <input type="email" placeholder='email address' className='w-[100%] h-[50px] rounded-md  shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px]' required  onChange={onChangeHandler} name='email' value={formData.email}/>
                  
                   </div>
                    <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
                    <input type="text" placeholder='street' className='w-[100%] h-[50px] rounded-md  shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px]' required  onChange={onChangeHandler} name='Street' value={formData.Street}/>
                  
                   </div>
                    <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
                    <input type="text" placeholder='City' className='w-[48%]  h-[50px] rounded-md  shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px]' required  onChange={onChangeHandler} name='City' value={formData.City}/>
                   <input type="text" placeholder='State' className='w-[48%] h-[50px] rounded-md  shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px]' required  onChange={onChangeHandler} name='State' value={formData.State}/>
                   </div>
                    <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
                    <input type="text" placeholder='Pincode' className='w-[48%] h-[50px] rounded-md  shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px]' required  onChange={onChangeHandler} name='PinCode' value={formData.PinCode}/>
                   <input type="text" placeholder='Country' className='w-[48%] h-[50px] rounded-md  shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px]' required  onChange={onChangeHandler} name='Country' value={formData.Country}/>
                   </div>
                    <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
                    <input type="text" placeholder='Phone' className='w-[100%] h-[50px] rounded-md  shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px]' required  onChange={onChangeHandler} name='Phone' value={formData.Phone}/>
                  
                   </div>
                   <button type='submit' className='text-[18px] active:bg-slate-500 cursor-pointer bg-[#3bcee848] py-[10px] px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px] absolute lg:right-[20%] bottom-[10%] right-[35%] border-[1px] border-[#8080849] ml-[30px] mt-[20px]'>
                   PLACE ORDER
                   </button>
            </form>
           
        </div>
         <div className='lg:w-[50vw] w-[100%] min-h-[100%] flex flex-col items-center justify-center gap-[30px]'> 
                <div className='lg:w-[70%] w-[90%] lg;h-[100%] flex items-center justify-center gap-[10px] flex-col'>
                    <CartTotal/>
                    <div className='py-[10px]'>
                        <Title text1={"PAYMENT"} text2={"METHOD"}/>
                    </div>
                </div>
                <div  className= 'w-[100%] h-[30vh] lg:h-[100px] flex items-start mt-[20px] lg:mt-[0px] justify-center gap-[50px]'>
                    <button onClick={()=>setMethod('razorpay')} className={`w-[150px] h-[50px] rounded-sm ${method==='razorpay'?'border-[5px] border-blue-900 rounded-sm':''}`}>
                        <img src={razorpay} className='w-[100%] h-[100%] object-fill rounded-sm' alt="" />
                    </button>
                      <button onClick={()=>setMethod('cod')} className={`w-[200px] h-[50px] bg-gradient-to-l from-[#95b3f8] to-[white] text-[#332f6f] font-bold   ${method==='cod'?'border-[5px] border-blue-900 rounded-sm':''}`}>
                       CASH ON DELIVERY
                    </button>
                </div>
        </div>
    </div>
  )
}

export default PlaceOrder