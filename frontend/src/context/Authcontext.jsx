/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { createContext } from 'react'

export const authDataContext=createContext();
const Authcontext = ({children}) => {
    let url="http://localhost:8000"
   let value={
      url
   }
  return (
   <authDataContext.Provider value={value}>{children}</authDataContext.Provider>

  )
}

export default Authcontext