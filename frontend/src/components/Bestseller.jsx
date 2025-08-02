import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/Shopcontext.jsx'
import Card from '../components/Card.jsx';

function Bestseller() {
  let {products}=useContext(shopDataContext)
  let [bestseller,setBestseller]=useState([])
  useEffect(()=>{
   
    let filteredProduct=products?.filter((item)=>item.bestSeller)
  console.log(filteredProduct)
    setBestseller(filteredProduct.slice(0,2))
  },[products])
  return (
    <div className='w-[100%] h-[8%] text-center mt-[50px]'>
      <Title text1={"BEST"} text2={"SELLER"} />
      <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100'>Tried,Tested,Loved Discover Our All-Time Best Sellers.</p>
      <div className='w-[100%] h-[50%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]'>
       {
  bestseller.map((item, index) => {
   return <Card key={index} name={item.name} id={item._id} image={item.image1} price={item.price} />
})
}
      </div>
    </div>
  )
}

export default Bestseller