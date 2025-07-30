import React from 'react'
import { shopDataContext } from '../context/Shopcontext' 
import{ useContext} from 'react'
import Title from './Title'
function CartTotal() {
  const {delievery_fee,currency,getCartAmount}=useContext(shopDataContext)
    console.log("Cart Amount:", getCartAmount());
  return (
    <div className='w-full lg:ml-[30px]'>
      <div className='text-xl py-[10px]'>
        <Title text1={"CART"} text2={"TOTALS"}/>
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm p-[30px] border-[2px] border-[#4d8890]'>
        <div className='flex justify-between text-white text-[13px] p-[10px]'>
          <p>SubTotal</p>
        
          <p>{currency} {getCartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between text-white text-[13px] p-[10px]'>
          <p>Shipping fee</p>
          <p>{currency} {delievery_fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between text-white text-[13px] p-[10px]'>
         <b>Total</b>
         <b>{currency} {getCartAmount()===0?0:getCartAmount()+delievery_fee}</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal