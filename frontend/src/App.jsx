
import { Route,Routes, useLocation } from 'react-router-dom'
import './App.css'
import Registration  from './pages/registration/Registration'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Nav from './components/Nav.jsx'
import About from './pages/About.jsx'
import Collections from './pages/Collections.jsx'
import Contact from './pages/Contact.jsx'
import Products from  './pages/Products.jsx'
import { useContext } from 'react'
import { userDataContext } from './context/UserContext.jsx'
import { Navigate } from 'react-router-dom'
import ProductDetail from './components/ProductDetail.jsx'
import Cart from './pages/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Order from './pages/Order.jsx'
import NotFound from './pages/NotFound.jsx'
import Ai from './components/Ai.jsx'
import { ToastContainer } from 'react-toastify'

function App() {
 
let {userData}=useContext(userDataContext)
let location =useLocation()
  return (
  <>
  <ToastContainer/>
     {userData&&<Nav/>} 
   
      <Routes>
          <Route path='/' element={userData?<Home/>:<Navigate to="/login" state={{from:location.pathname}}/>}/>
           <Route path='/signup' element={userData?<Navigate to={location.state?.from||"/"}/>:<Registration/>}/>

            <Route path='/login' element={userData?<Navigate to={location.state?.from||"/"}/>:<Login/>}/>
           
            <Route path='/about' element={userData?<About/>:<Navigate to="/login" state={{from:location.pathname}}/>}/>
             <Route path='/collections' element={userData?<Collections/>:<Navigate to="/login" state={{from:location.pathname}}/>}/>
              <Route path='/products' element={userData?<Products/>:<Navigate to="/login" state={{from:location.pathname}}/>}/>
               <Route path='/contacts' element={userData?<Contact/>:<Navigate to="/login" state={{from:location.pathname}}/>}/>
                 <Route path='/productDetail/:productId' element={userData?<ProductDetail/>:<Navigate to="/login" state={{from:location.pathname}}/>}/>
             <Route path='/cart' element={userData?<Cart/>:<Navigate to="/login" state={{from:location.pathname}}/>}/>
              <Route path='/placeorder' element={userData?<PlaceOrder/>:<Navigate to="/login" state={{from:location.pathname}}/>}/>
            
             <Route path='/order' element={userData?<Order/>:<Navigate to="/login" state={{from:location.pathname}}/>}/>
            <Route path="*" element={<NotFound/>}/>
          

      </Routes>
       <Ai/>
  </>
  )
}

export default App
