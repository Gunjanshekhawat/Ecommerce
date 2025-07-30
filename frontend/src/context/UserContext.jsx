/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { authDataContext } from './Authcontext'
export const userDataContext=createContext()
import axios from 'axios'
import { useEffect } from 'react'

function UserContext({children}) {
    const[userData,setuserData]=useState("")
    let {url}=useContext(authDataContext)
    const getCurrentUser=async()=>
    {
          try {
            let result=await axios.get(url+'/api/user/getCurrentUser',{withCredentials:true})
            setuserData(result.data)
            console.log(result.data)
          } catch (error) {
             setuserData(null)
             console.log(error)
          }
    }
    useEffect(()=>{
        getCurrentUser();
    },[])
    let value={
       userData,setuserData,getCurrentUser
    }
    
  return (
    <userDataContext.Provider value={value}>
        {children}
    </userDataContext.Provider>
  )
}

export default UserContext