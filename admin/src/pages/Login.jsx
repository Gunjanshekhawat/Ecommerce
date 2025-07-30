/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import React, { useContext } from 'react'
import Logo from '../assets/logo.png'
import { useState } from 'react'
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import axios from 'axios'
import { authDatacontext } from '../context/AuthContext';
import { UserDataContext } from '../context/UserContext';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
const Login = () => {
    let {url}=useContext(authDatacontext)
     const[show,setShow]= useState(false)
     const [email,setEmail]=useState("")
     let {getAdmin}=useContext(UserDataContext)
     const [password,setPassword]=useState("")
     let navigate=useNavigate()
     const AdminLogin=async(e)=>{
         e.preventDefault()
        try 
        {
            const result=await axios.post(url+'/api/auth/adminlogin',{email,password},{withCredentials:true}) 
             toast.success("admin login successfully")
            getAdmin()
            navigate("/")
        } catch (error) {
            console.log(error)
            toast.error("AdminLogin Failed")
        }
     }
  return (
     <div className='w-[100%] h-[400vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start gap-[30px] py-[30px]'>
            <div className='w-[100%] h-[80px] flex items-center justify-start  px-[30px]  gap-[10px] cursor-pointer '>
            <img className='w-[100px] ' src={Logo} alt=""  />
            <h1>OneCart</h1>
            </div>
                <div className='w-[100%]   flex flex-col items-center justify-center gap-[30px] '>
                    <span className='text-[25px] font-semibold'>Login Page</span>
                    <span className='text-[16px]'>Welcome to OneCart, Apply to admin login</span>
                </div>
                <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center p-[30px]'>
                    <form action="" onSubmit={AdminLogin} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
                        
                        
                        <div className='w-[90%] h-[300px] flex flex-col items-center justify-center gap-[15px] relative '>
                           <input type="text" className='w-[90%] h-[50px] border-[2px] border-[#96969635] rounded-lg shadow-lg bg-transparent  px-[20px] font-semibold backdrop:blur-sm placeholder-[#ffffffc7]' placeholder='EmailId' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
                              <input type={show?"text":"password"} className='w-[90%] h-[50px] border-[2px] border-[#96969635] rounded-lg shadow-lg bg-transparent  px-[20px] font-semibold backdrop:blur-sm placeholder-[#ffffffc7]' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} value={password} />
                               {show?<IoMdEye  className='w-[20px] h-[20px] cursor-pointer absolute right-[10%] top-[45%]' onClick={()=>setShow(prev=>!prev)}/>
                               :<IoMdEyeOff  className='w-[20px] h-[20px] cursor-pointer absolute right-[10%] top-[45%]' onClick={()=>setShow(prev=>!prev)}/>}
                               <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold'>Login</button>
                              
                        </div>
                    </form> 
                </div>
            </div>
  )
}

export default Login