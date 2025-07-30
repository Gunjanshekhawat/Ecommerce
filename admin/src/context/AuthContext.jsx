/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from 'react'
export const authDatacontext=createContext()

function AuthContext({children}) {
    let url="http://localhost:8000"
    let value={
    url
    }
  return (
   <authDatacontext.Provider value={value}>
    {children}
   </authDatacontext.Provider>
  )
}

export default AuthContext