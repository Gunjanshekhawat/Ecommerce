/* eslint-disable no-empty */
import React from 'react'
import Logo from '../../assets/logo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import google from '../../assets/google.jpg'
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { useContext } from 'react'
import  { authDataContext } from '../../context/Authcontext'
import axios from 'axios'

import {auth,provider} from '../../../Utils/Firebase.js'
import { signInWithPopup } from 'firebase/auth'
const Registration = () => {
    let navigate=useNavigate()
    let {url}=useContext(authDataContext)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSignUp=async(e)=>{
        e.preventDefault()
            try
            {
               const result=await axios.post(url+'/api/auth/registration',{name,email,password},{withCredentials:true}) 
               console.log(result.data)
              
            }
            catch(error)
            {
                console.log(error)
                
            }
    }
    const googleSignup=async()=>{
        try
        {
           const response=await signInWithPopup(auth,provider);
           let user=response.user;
           let name=user.displayName;
           let email=user.email;
           const result=await axios.post(url+'/api/auth/googlelogin',{name,email},{withCredentials:true}) 
           console.log(result.data)
           
        }
        catch(error)
        {
           console.log(error)
        }
    }
    const[show,setShow]= useState(false)
  return (
        <div className='w-[100%] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start gap-[30px] py-[30px]'>
        <div className='w-[100%] h-[80px] flex items-center justify-start  px-[30px]  gap-[10px] cursor-pointer '>
        <img className='w-[100px] ' src={Logo} alt="" onClick={()=>navigate('/')} />
        <h1>OneCart</h1>
        </div>
            <div className='w-[100%]   flex flex-col items-center justify-center gap-[30px] '>
                <span className='text-[25px] font-semibold'>Registration Page</span>
                <span className='text-[16px]'>Welcome to OneCart, Place your order</span>
            </div>
            <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center p-[30px]'>
                <form action="" onSubmit={handleSignUp} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
                    <div className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer' onClick={googleSignup}>
                        <img src={google} alt="" className='w-[20px]'/>Registration with Google
                     </div>
                    <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
                    <div className='w-[40%] h-[1px] bg-[#96969635]'></div>Or
                    <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
                     </div>
                    <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative '>
                        <input type="text" className='w-[90%] h-[50px] border-[2px] border-[#96969635] rounded-lg shadow-lg bg-transparent  px-[20px] font-semibold backdrop:blur-sm placeholder-[#ffffffc7]' placeholder='UserName' required onChange={(e)=>setName(e.target.value)} value={name}/>
                         <input type="text" className='w-[90%] h-[50px] border-[2px] border-[#96969635] rounded-lg shadow-lg bg-transparent  px-[20px] font-semibold backdrop:blur-sm placeholder-[#ffffffc7]' placeholder='Email-Id' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
                          <input type={show?"text":"password"} className='w-[90%] h-[50px] border-[2px] border-[#96969635] rounded-lg shadow-lg bg-transparent  px-[20px] font-semibold backdrop:blur-sm placeholder-[#ffffffc7]' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
                           {show?<IoMdEye  className='w-[20px] h-[20px] cursor-pointer absolute right-[10%]' onClick={()=>setShow(prev=>!prev)}/>
                           :<IoMdEyeOff  className='w-[20px] h-[20px] cursor-pointer absolute right-[10%]' onClick={()=>setShow(prev=>!prev)}/>}
                           <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold'>Create Account</button>
                          <p className='flex gap-[10px]' >you have any account?<span className='text-[#5555f6cf] text-[17px] font-emibold cursor-pointer' onClick={()=>navigate("/login")}>Login</span></p>
                    </div>
                </form> 
            </div>
        </div>
  )
}

export default Registration