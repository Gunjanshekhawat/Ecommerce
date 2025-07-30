/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import  Sidebar  from '../components/Sidebar'
import { authDatacontext } from '../context/Authcontext';
import axios from 'axios'
function Lists() 
{
  let[list,setlist]=useState([]);
  let {url}=useContext(authDatacontext)
  const fetchList=async()=>{
         try 
         {
           let result=await axios.get(url+"/api/product/list",{withCredentials:true})
           console.log(result.data)
           setlist(result.data)
         }
         catch (error) 
         {
                console.log(error)
         } 
         }
  useEffect(()=>{
      fetchList()
  },[])
  const removeList=async (id)=>{
     try {
      let result=await axios.post(`${url}/api/product/remove/${id}`,{id},{withCredentials:true})
      if(result.data)
      {
        fetchList()
      }
      else{
        console.log("failed to remove product")
      }
     } catch (error) {
       console.log(error)
     }
  }
  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white]'>
            <Nav/>
            <Sidebar/>
           <div className='w-[100%] h-[100%] lg:ml-[320px]  md:ml-[230px] justify-start  flex flex-col gap-[30px] overflow-x-hidden py-[50px] ml-[200px] '>
            <div className='w-[500px] h-[50px] text-[28px] md:text-[40px] ml-[20px] mt-[40px] text-white'>All Listed Product</div>
              
              {
                list&&list.length>0?
                (list.map((item,index)=>(<div className='w-[80%] md:h-[120px] h-[90px] bg-slate-900 rounded-xl flex items-center justify-start gap-[5px] md:gap-[30px] p-[10px] md:px-[30px]' key={index}>
                  <img src={item.image1} className='w-[30%] md:w-[120px] h-[90%] rounded-lg' alt="" />
                  <div className='w-[80%] h-[80%] flex flex-col items-start justify-center gap-[2px]'>
                    <div className='w-[100%] md:text-[20px] text-[15px] text-[#bef0f3]'>{item.name}</div>
                    <div className='md:text-[17px] text-[15px] text-[#bef3da]'>{item.category}</div>
                    <div className='md:text-[17px] text-[15px] text-[#bef3da]'>{item.price}</div>
                  </div>
                  <div className='w-[20%] h-[100%]  bg-transparent flex items-center justify-center'>
                    <span className='w-[30px] h-[30%] flex items-center justify-center rounded-md md:hover:bg-red-300 md:hover:text-black cursor-pointer hover:text-red-300' onClick={()=>removeList(item._id)}>X</span>
                  </div>
                   </div>
                ))):
                (<div className=' px-[50px] text-white text-lg '>No Product Available</div>)
              }
            </div>
            </div>
          
   



    
  )
}

export default Lists