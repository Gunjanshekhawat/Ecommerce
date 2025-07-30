import React, { useContext } from 'react'
import {Routes ,Route} from 'react-router-dom'
import Add from './pages/Add'
import Home from './pages/Home'
import Login from './pages/Login'
import Lists from './pages/Lists'
import Orders from './pages/Orders'
import {ToastContainer,toast} from 'react-toastify'
import { UserDataContext} from './context/UserContext'
function App() {
  let {adminData}=useContext(UserDataContext)
  return (
    <>
    <ToastContainer/>
    {!adminData?<Login/>:<>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
      <Route path='/lists' element={<Lists/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/orders' element={<Orders/>}></Route>
    </Routes>
    </>
}
    </>
  )
}

export default App