import React from 'react'
import Nav from '../components/Nav'
import { useState } from 'react'
import { useContext } from 'react'
import { authDatacontext } from '../context/Authcontext'
import axios from 'axios'
import { useEffect } from 'react'
import { SiEbox } from "react-icons/si";
import Sidebar from '../components/Sidebar'

function Orders() {
  let [orders,setorders]=useState([])
  let {url}=useContext(authDatacontext)
  let fetchAllorders=async()=>{
        try {
           const result=await axios.post(url+'/api/order/list',{},{withCredentials:true})
           setorders(result.data.reverse())
        } catch (error) {
          console.log(error)
        }
  }
  const statusHandler=async(e,orderId)=>{
             try{
               const result=await axios.post(url+"/api/order/status",{orderId,status:e.target.value},{withCredentials:true})
               if(result.data)
               {
                await fetchAllorders()
               }
             }
             catch(error)
             {
                 console.log(error)
             }
  }
  useEffect(()=>{
    fetchAllorders()
  })
  return (
    <div className='w-[99vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-row items-start '>
       <Nav/>
      <Sidebar/>
          <div className='lg:w-[100%] md:w-[70%] h-[100%] lg:ml-[320] md:ml-[250] mt-[70px] flex flex-col justify-start gap-[10px] overflow-x-hidden lg:py-[0] px-[300px] ml-[100px]'>
                    <div className='w-[100%] h-[50px] text-[28px] md:text-[40px] mb-[20px] text-white'>ALL Orders List</div>
                    {
                      orders.map((order,index)=>{
                        return <div key={index} className='w-[100%] h-[40%] bg-slate-600 rounded-xl flex lg:items-center items-start justify-between flex-col lg:flex-row p-[10px] md:px-[20px] gap-[20px]'>
                           <SiEbox  className='w-[100px] h-[100px] text-[black] p-[5px] rounded-lg bg-white'/>
                           <div>
                            <div className='flex items-center justify-center flex-col gap-[5px] text-[20px] text-[#56dbfc]'>
                              {
                                order.items.map((item,index)=>{
                                  if(index===order.items.length-1)
                                  {
                                         return  <p key={index}> {item.name.toUpperCase()} * {item.quantity}<span>   {item.size} </span>
                                         </p>
                                  }
                                  else{
                                      return  <p key={index}>{item.name.toUpperCase()} * {item.quantity}<span>   {item.size} </span>,
                                         </p>
                                  }
                                })
                              }
                              
                            </div>
                            <div className='text-[15px] text-green-100'>
                              <p>{order.address.firstName+" "+order.address.lastName}</p>
                              <p>{order.address.Street+" ,"}</p>
                              <p>{order.address.City+" ," +order.address.State+","+order.address.Country+","+order.address.pinCode}</p>
                              <p>{order.address.Phone}</p>
                            </div>
                           </div>
                           <div className='text-[15px] text-green-100'>
                            <p>Items:{order.items.length}</p>
                            <p>Method:{order.paymentMethod}</p>
                            <p>Payment:{order.payment?'Done':'Pending'}</p>
                            <p>Date:{new Date(order.date).toLocaleDateString()}</p>
                            <p className='text-[20px] text-white '>{order.amount}</p>
                           </div>
                           <select name="" id="" value={order.status} className='px-[5px] py-[10px] bg-slate-500 rounded-lg border-1px border-[#96eef3]' onChange={(e)=>statusHandler(e,order._id)}>
                            <option value="Order Placed">Order Placed</option>
                            <option value="Packing">Packing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Out for Delivery">Out for Delivery</option>
                            <option value="Delivered">Delivered</option>
                           </select>
                          </div>
                      })
                    }
          </div>
       </div>
  
  )
}

export default Orders