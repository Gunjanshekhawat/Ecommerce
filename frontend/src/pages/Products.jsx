import React from 'react'
import  Latestcollections from '../components/Latestcollections.jsx'
import Bestseller from '../components/Bestseller.jsx'

function Products() {
  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-start flex-col py-[20px]'>
      <div className='w-[100%] min-h-[70px] flex items-center justify-center gap-[10px] flex-col'>
        <Latestcollections/>
      </div>
       <div className='w-[100%] min-h-[70px] flex items-center justify-center gap-[10px] flex-col'>
        <Bestseller/>
      </div>
     

    </div>
  )
}

export default Products