import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import axios from 'axios'
import { authDatacontext } from '../context/Authcontext'
import { UserDataContext } from '../context/UserContext'
function Nav() {
    let navigate=useNavigate()
    let {url}=useContext(authDatacontext)
    let {getAdmin}=useContext(UserDataContext)
    const logout=async()=>{
   
           try 
           {
               const result=await axios.get(url+'/api/auth/logout',{withCredentials:true})
               console.log(result.data)
               getAdmin()
               navigate("/login")

           } 
           catch(error) 
           {
             console.log(error)
           }
    }
  return (
    <div className='w-[100%] h-[70px] bg-[#dcdbdbf8] z-10 fixed top-0 flex items-center justify-between px-[30px] overflow-x-hidden shadow-md shadow-black'>
        <div className='w-[30%] flex items-center justify-start cursor-pointer gap-[10px]' onClick={()=>navigate("/")}>
         <img src={logo} alt="" className='w-[30px] '/>
         <h1 className='text-[25px] text-[black] font-sans '>OneCart</h1>
        
        </div>
         <button className='text-[15px] hover:border-[2px] border-[#89daea] cursor-pointer bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white' onClick={logout}>LogOut</button>
        </div>
  )
}

export default Nav