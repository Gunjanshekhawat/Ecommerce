/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDatacontext } from './AuthContext.jsx'
import axios from 'axios'

export const UserDataContext=createContext()
const UserContext = ({children}) => {
  let [adminData,setAdminData]=useState(null)
  let {url}=useContext(authDatacontext)
  const getAdmin=async()=>{
    try {
      let result=await axios.get(url+'/api/user/getAdmin',{withCredentials:true})
   
       setAdminData(result.data)
    } catch (error) 
    {
        setAdminData(null)
        console.log(error)
    }
       
  }
  useEffect(()=>{
    getAdmin()
  })
  let value={
        setAdminData,adminData,getAdmin 
   }
  return (
  
   <div>
    <UserDataContext.Provider value={value}>
        {children}
    </UserDataContext.Provider>
    </div>
  )
}

export default UserContext