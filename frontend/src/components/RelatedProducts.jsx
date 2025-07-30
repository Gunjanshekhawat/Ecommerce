/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useState,useContext } from 'react'
import { shopDataContext } from '../context/Shopcontext'
import Card from './Card.jsx'
import Title from './Title.jsx'

function RelatedProducts({category,subCategory,currentProductId}) {
    let {products}=useContext(shopDataContext)
    let [related,setRelated]=useState([])
    useEffect(()=>{
        if(products.length>0)
        {
            let productCopy=products.slice()
            productCopy=productCopy.filter((item)=>category===item.category)
            productCopy=productCopy.filter((item)=>subCategory===item.subCategory)
            productCopy=productCopy.filter((item)=>currentProductId!==item._id)
            setRelated(productCopy.slice(0,4))
        }
    },[products,currentProductId,category,subCategory])
  return (
    <div className='my-[130px] md:my-[40px] md:px-[60px]'>
        <div className='ml-[20px] lg:ml-[80px]'>
            <Title text1={'RELATED'} text2={'PRODUCTS'}/>
        </div>
        <div className='w-[100%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]'>
            {
                related.map((item,index)=>{
                    <Card key={index} id={item._id} image={item.image1} name={item.name} price={item.price}/>
                })
            }
        </div>
    </div>
  )
}

export default RelatedProducts