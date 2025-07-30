import React, { useContext, useState } from 'react'
import logo from  '../assets/logo.png'
import { IoSearch } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import {userDataContext} from '../context/UserContext.jsx'
import axios from 'axios'
import { authDataContext } from '../context/Authcontext.jsx';
import { IoMdHome } from "react-icons/io";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import { shopDataContext } from '../context/Shopcontext.jsx';

const Nav = () => {
  let navigate=useNavigate()
  let {url}=useContext(authDataContext)
  let{setsearch,search,getCartCount}=useContext(shopDataContext)
  let {getCurrentUser} =useContext(userDataContext)
  let {userData}=useContext(userDataContext)
  let [showSearch ,setshowSearch]=useState(false)
  let [showProfile,setshowProfile]=useState(false)
  const handleLogout=async()=>{
      try{
           const result=await axios.get(url+'/api/auth/logout',{withCredentials:true})
           console.log(result.data)
           getCurrentUser()
      }
      catch(error)
      {
            console.log(error)
      }
  }
  return (
   <div className='w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black ' >
      <div className='w-[20%] lg:w-[30%] flex items-ceter justify-start gap-[10px]'>
        <img src={logo} alt=""  className='w-[30px]'/>
        <h1 className='text-[25px] text-[black] font-sans'>oneCart</h1>
        </div>
        <div className='w-[50%] lg:w-[40%] hidden md:flex'>
              <ul className='flex items-center justify-center gap-[19px] text-[white]'>
                <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate("/")}>HOME</li>
                <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate("/collections")}>COLLECTIONS</li>
                <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate("/about")}>ABOUT</li>
                <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl 'onClick={()=>navigate("/contacts")} >CONTACT</li>
              </ul>
        </div>
        <div className='w-[30%] flex items-center justify-end gap-[20px] px-[60px]'>
           <IoSearch className='w-[45px] h-[45px] cursor-pointer text-[#000000]' onClick={()=>{setshowSearch(prev=>!prev);navigate('/collections')}}/>
           {!userData&& <FaCircleUser className='w-[45px] h-[45px] cursor-pointer text-[#000000]' onClick={()=>setshowProfile(prev=>!prev)}/>}
           {userData&&<div className='w-[45px] h-[45px] bg-[#080808] text-[white] rounded-full flex items-center cursor-pointer justify-center' onClick={()=>setshowProfile(prev=>!prev)}>{userData?.name.slice(0,1)}</div>}
            <BsCart  className='w-[45px] h-[45px] cursor-pointer text-[#000000] hidden md:block' onClick={()=>navigate("/cart")}/>
            <p className='absolute w-[18px] h-[18px] items-center  hidden md:block justify-center  px-[5px] py-[2px] text-white bg-black rounded-full text-[5px] top-[4px] right-[75px] '>{getCartCount}</p>
        </div>
      {showSearch&&  <div className='w-[100%] h-[80px] bg-[#d8f6f9dd] absolute  top-[100%] left-0 right-0 flex items-center justify-center'>
                  <input type="text" onChange={(e)=>{setsearch(e.target.value)}} value={search} className='lg:w-[50%] h-[60%] w-[80%] bg-[#233533] rounded-[30px] px-[50px] placholder:text-white text-[white] text-[18px]' />
        </div>}
        {showProfile&&<div className='absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10'>
           <ul className='text-white flex flex-col items-start justify-around text-[17px] py-[10px] w-[100%] h-[100%] '>
          {!userData&&  <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={()=>{navigate('/login');setshowProfile(false)}}>Login</li>}
          {userData&& <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={()=>{handleLogout();setshowProfile(false)}}>LogOut</li>}
            <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={()=>{navigate("/order");setshowProfile(false)}}>Orders</li>
            <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={()=>{navigate("/about");setshowProfile(false)}}>About</li>
           </ul>
        </div>  } 
        <div className='w-[100vw] h-[90px] text-[12px] flex items-center justify-between px-[20px] fixed bottom-0 left-0 bg-[#191818] md:hidden'>
          <button className='text-[white] flex items-center justify-center flex-col gap-[2px] md:hidden' onClick={()=>navigate("/")}><IoMdHome  className='w-[25px] h-[25px] text-[white] '/>Home</button>
          <button className='text-[white] flex items-center justify-center flex-col gap-[2px] md:hidden' onClick={()=>navigate("/collections")}><HiOutlineCollection  className='w-[25px] h-[25px] text-[white] '/>Collections</button>
          <button className='text-[white] flex items-center justify-center flex-col gap-[2px] md:hidden' onClick={()=>navigate("/contacts")}><MdContacts  className='w-[25px] h-[25px] text-[white] '/>Contact</button>
          <button className='text-[white] flex items-center justify-center flex-col gap-[2px] md:hidden' onClick={()=>navigate("/cart")}><BsCart   className='w-[25px] h-[25px] text-[white] '/>Cart</button>
          <p className='absolute w-[18px] h-[18px] flex items-center justify-center bg-white px-[5px] py-[2px] text-black font-semibold rounded-full text-[9px] top-[8px] right-[18px]'>{getCartCount}</p>
        </div>
   </div>
  )

}

export default Nav