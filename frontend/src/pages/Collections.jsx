/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import {shopDataContext} from '../context/Shopcontext.jsx'
import Card from '../components/Card.jsx'
import Title from '../components/Title.jsx';

function Collections() {
  let [showfilter,setshowfilter]=useState(false)

  let {products,search,showsearch}=useContext(shopDataContext)
  let [filterProduct,setfilterProduct]=useState([])
  let [category,setcategory]=useState([])
  let [subcategory,setsubcategory]=useState([])
  
  let [sortType,setSortType]=useState("relevant")
  const toggleCategory=async(e)=>
  {
    if(category.includes(e.target.value))
    {
        setcategory(prev=>prev.filter(item=>item!=e.target.value))
    }
    else{
      setcategory(prev=>[...prev,e.target.value])
    }   
  }
  const togglesubCategory=async(e)=>
  {
      if(subcategory.includes(e.target.value))
    {
        setsubcategory(prev=>prev.filter(item=>item!=e.target.value))
    }
    else{
      setsubcategory(prev=>[...prev,e.target.value])
    }   
  }
  const applyFilter=async()=>{
        let productCopy=products.slice(0,3)
        if(showsearch&&search)
        {
          productCopy=productCopy.filter(item=>item.name.toLowCase().includes(search.toLowCase()))
        }
        if(category.length>0)
        {
          productCopy=productCopy.filter(item=>
            category.includes(item.category)
          )
        }
         if(subcategory.length>0)
        {
          productCopy=productCopy.filter(item=>
            subcategory.includes(item.subcategory)
          )
        }
        setfilterProduct(productCopy)
  }
  const sortProducts=()=>{
    let fbCopy=filterProduct.slice(0,3)
      console.log("Filtered best sellers:", fbCopy);
    switch(sortType)
    {
      case 'low-high':setfilterProduct(fbCopy.sort((a,b)=>(a.price-b.price)))
           break;
      case 'high-low':setfilterProduct(fbCopy.sort((a,b)=>(b.price-a.price)))
           break;
      default:
        applyFilter()
        break;
    }
  }
  useEffect(()=>{
    sortProducts()
  },[sortType])

useEffect(()=>{
 setfilterProduct(products)
},[products])
useEffect(()=>{
 applyFilter()
},[category,subcategory,search,showsearch])

  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-start flex-col md:flex-row justify-start pt-[70px] overflow-x-hidden z-[2]'>
      <div className={`md:w-[30vw] ${showfilter?"h-[45vh]":"h-[8vh]"}lg:w-[20vw] w-[100vw] md:min-h-[100vh] p-[2px] border-r-[12px] border-gray-[100] text-[#aaf5fa] lg:fixed`}>
        <p className='text-[25px] font-semibold flex gap-[5px] cursor-pointer items-center px-[5px] justify-start' onClick={()=>setshowfilter(prev=>!prev)}>FILTERS
        {!showfilter&&  <FaChevronRight className='text-[18px] md:hidden'/>}
        {showfilter&&  <FaChevronDown className='text-[18px] md:hidden' />}
        </p>
        <div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showfilter?"":"hidden"} md:block`}>
          <p className='text-[18px] text-[#f8fafa]'>CATEGORIES</p>
          <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>
            <p className='flex items-center justify-center gap-[10px] text-[16px] fony-light'><input type="checkbox" value={'Men'} onChange={toggleCategory} className='w-3'/>MEN</p>
            <p className='flex items-center justify-center gap-[10px] text-[16px] fony-light'><input type="checkbox" value={'Women'} onChange={toggleCategory} className='w-3'/>WOMEN</p>
            <p className='flex items-center justify-center gap-[10px] text-[16px] fony-light'><input type="checkbox" value={'Kids'} onChange={toggleCategory} className='w-3'/>KIDS</p>
          </div>
        </div>
         <div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showfilter?"":"hidden" } md:block`}>
          <p className='text-[18px] text-[#f8fafa]'>SUB-CATEGORIES</p>
          <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>
            <p className='flex items-center justify-center gap-[10px] text-[16px] fony-light'><input type="checkbox" value={'TopWear'} onChange={togglesubCategory} className='w-3'/>TopWear</p>
            <p className='flex items-center justify-center gap-[10px] text-[16px] fony-light'><input type="checkbox" value={'BottomWear'} onChange={togglesubCategory} className='w-3'/>BottomWear</p>
            <p className='flex items-center justify-center gap-[10px] text-[16px] fony-light'><input type="checkbox" value={'WinterWear'} onChange={togglesubCategory} className='w-3'/>WinterWear</p>
          </div>
        </div>
      </div>
      <div className='lg:pl-[30%] md:py-[10px]'>
        <div className='md:w-[80vw] w-[100vw] p-[20px] flex justify-between flex-col lg:flex-row lg:px-[250px]'>
          <Title text1={"ALL"} text2={"COLLECTIONS"}/>
          <select name="" id="" className='bg-slate-600 w-[60%] md:w-[200px] h-[50px] px-[10px] text-[white] rounded-lg hover:border-[#46d1f7] border-[2px]' onChange={(e)=>{
            setSortType(e.target.value)
          }}>
            <option value="relevant" className='w-[100%] h-[100%]'>sortBy: relevant</option>
            <option value="low-high"  className='w-[100%] h-[100%]'>sortBy: low-high</option>
            <option value="high-low"  className='w-[100%] h-[100%]'>sortBy: high-low</option>
          </select>
        </div>
      
        <div className='lg:w-[60vw] md:w-[60vw]  w-[100vw] min-h-[70vh] flex items-center justify-center fles-wrap gap-[30px]'>
          {
              filterProduct.map((item,index)=>{
                    return   <Card key={index} id={item._id} name={item.name} price={item.price} image={item.image1}/>
                 })
          }
        </div>
        </div>
      </div>
  )
}

export default Collections