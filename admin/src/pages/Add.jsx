/* eslint-disable no-unused-vars */
    import React, { useContext } from 'react'
    import Nav from '../components/Nav'
    import Sidebar from '../components/Sidebar'
    import upload from '../assets/upload.png'
import { useState } from 'react'
import { authDatacontext } from '../context/Authcontext'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'

    
    function Add() {
      const [loading,setLoading]=useState(false)
      let [image1,setImage1]=useState(false)
      let [image2,setImage2]=useState(false)
      let [image3,setImage3]=useState(false)
      let [image4,setImage4]=useState(false)
      let [name,setName]=useState("")
      let [description,setDescription]=useState("")
      let [category,setCategory]=useState("Men")
      let [price,setPrice]=useState("")
      let [subcategory,setSubcategory]=useState("TopWear")
      let [bestSeller,setBestSeller]=useState(false)
      let [sizes,SetSizes]=useState([])
      let {url}=useContext(authDatacontext)
      const handleAddProduct=async(e)=>{
        setLoading(true)
        e.preventDefault()
              try 
              {
                 console.log("Form submitted");
                let formData=new FormData()
                formData.append('name',name);
                formData.append('price',price);
                formData.append('category',category);
                formData.append('description',description);
                formData.append('subcategory',subcategory);
                formData.append('bestSeller',bestSeller);
                formData.append('sizes',JSON.stringify(sizes))
                formData.append('image1',image1)
                formData.append('image2',image2)
                formData.append('image3',image3)
                formData.append('image4',image4)
                let result=await axios.post(url+'/api/product/addProduct',formData,{withCredentials:true})
                console.log(result.data)
                toast.success("ADD PRODUCT SUCCESSFULLY")
                setLoading(false)
                if(result)
                {
                  setName("")
                  setDescription("")
                  setImage1(false)
                  setImage2(false) 
                  setImage3(false)
                  setImage4(false)
                  setPrice("")
                  setBestSeller(false)
                  setCategory("Men")
                  setSubcategory("TopWear")
                }
              } catch (error) 
              {
                console.log(error)
                setLoading(false)
                toast.error("Add Product Failed")
              }
      }
      return (
        <div className='w-[100vw] min-h-[100vh]  bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] overflow-x-hidden relative'>
          <Nav/>
          <Sidebar/>
          <div className='w-[82%] h-[100%] flex items-center bottom-[5%]  justify-start overflow-x-hidden absolute right-0'>
            <form action="" className='w-[100%] md:w-[90%] h-[100%] mt-[70px] flex flex-col gap-[30px] py-[60px] px-[30px] md:px-[60px] 'onSubmit={(e)=>handleAddProduct(e)}>
                   <div className='w-[400px] h-[50px] text-[25px] md:text-[40px] text-white'>Add Product page</div>

                   <div className='w-[80%] h-[130px] flex items-start justify-center flex-col mt-[20px] gap-[10px]'>
                    <p className='text-[20px] md:text-[25px] font-semibold'>Upload Image</p>
                     <div className='w-[100%] h-[100%] flex items-center justify-start'>
                      <label htmlFor="image1" className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]'>
                        <img src={!image1?upload:URL.createObjectURL(image1)} alt="" className='w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]'/>
                        <input type="file" id='image1' hidden onChange={(e)=>setImage1(e.target.files[0])} required/>
                      </label>
                      <label htmlFor="image2" className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]'>
                        <img src={!image2?upload:URL.createObjectURL(image2)} alt="" className='w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]'/>
                        <input type="file" id='image2' hidden onChange={(e)=>setImage2(e.target.files[0])} required/>
                      </label>
                      <label htmlFor="image3" className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]'>
                        <img src={!image3?upload:URL.createObjectURL(image3)} alt="" className='w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]'/>
                        <input type="file" id='image3' hidden onChange={(e)=>setImage3(e.target.files[0])} required/>
                      </label>
                      <label htmlFor="image4" className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]'>
                        <img src={!image4?upload:URL.createObjectURL(image4)} alt="" className='w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]'/>
                        <input type="file" id='image4' hidden onChange={(e)=>setImage4(e.target.files[0])} required/>
                      </label>
                     </div>
                    </div>
                    <div className='w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px] '>
                      <p className='text-[20px] md:text-[25px] font-semibold'>Product Name</p>
                      <input type="text" placeholder='Type here' className='w-[600px] max-w-[40%] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] placeholder:text-[#fffffffc2]'  onChange={(e)=>setName(e.target.value)} value={name}/>
                    </div>
                     <div className='w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px] '>
                      <p className='text-[20px] md:text-[25px] font-semibold'>Product description</p>
                      <textarea type="text" placeholder='Type here' className='w-[600px] max-w-[40%] h-[600px] py-[10px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] placeholder:text-[#fffffffc2]' onChange={(e)=>setDescription(e.target.value)} value={description}/>
                      
                    </div>
                    <div className='w-[80%] flex items-center gap-[10px] flex-wrap'>
                      <div className='md:w-[30%] w-[100%] flex items-start sm:justify-center flex-col gap-[10px]'>
                        <p className='text-[20px] md:text-[25px] font-semibold w-[100%]'>Product Category</p>
                        <select name="" id="" className='bg-slate-600 w-[60%] p-[10px] py-[7px] rounded-lg hover:border-[#46d1f7] border-[2px]' onChange={(e)=>setCategory(e.target.value)}>
                          <option value="Men">Men</option>
                          <option value="Women">Women</option>
                          <option value="Kids">Kids</option>
                        </select>
                      </div>
                   
                      <div className='md:w-[30%] w-[100%] flex items-start sm:justify-center flex-col gap-[10px]'>
                        <p className='text-[20px] md:text-[25px] font-semibold w-[100%]'>Sub Category</p>
                        <select name="" id="" className='bg-slate-600 w-[60%] p-[10px] py-[7px] rounded-lg hover:border-[#46d1f7] border-[2px]' onChange={(e)=>setSubcategory(e.target.value)}>
                          <option value="Topwear">TopWear</option>
                          <option value="Bottomwear">Bottomwear</option>
                          <option value="winterwear">winterwear</option>
                        </select>
                      </div>
                    </div>
                     <div className='w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px] '>
                      <p className='text-[20px] md:text-[25px] font-semibold'>Product Price</p>
                      <input type="Number" placeholder='2000' className='w-[600px] max-w-[98%] h-[40px] py-[10px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] placeholder:text-[#fffffffc2]'onChange={(e)=>setPrice(e.target.value)} value={price} />
                      
                    </div>
                    <div className='w-[80%] h-[50px] md:h-[100px] flex items-start justify-center flex-col gap-[20px] py-[10px] md:py-[0px] 
                    '>
                      <p className='text-[20px]  md:text-[25px] font-semibold py-[7px]'>Product Size</p>
                      <div className='flex items-center justify-start gap-[15px] flex-wrap '>
                         <div className={`px-[20px] py-[7px] rounded-lg bg-slate-400 text-[20px] hover:border-[#46d1f7] border-[2px] cursor-pointer ${sizes.includes("S")?"bg-green-200 text-[black] border-[#46d1f7]":""}`} onClick={()=>SetSizes(prev=>prev.includes('S')?prev.filter(item=>item!=='S'):[...prev,'S'])}>S</div>
                         <div className={`px-[20px] py-[7px] rounded-lg bg-slate-400 text-[20px] hover:border-[#46d1f7] border-[2px] cursor-pointer ${sizes.includes("M")?"bg-green-200 text-[black] border-[#46d1f7]":""}` }onClick={()=>SetSizes(prev=>prev.includes('M')?prev.filter(item=>item!=='M'):[...prev,'M'])}>M</div>
                         <div className={`px-[20px] py-[7px] rounded-lg bg-slate-400 text-[20px] hover:border-[#46d1f7] border-[2px] cursor-pointer ${sizes.includes("L")?"bg-green-200 text-[black] border-[#46d1f7]":""}`  } onClick={()=>SetSizes(prev=>prev.includes('L')?prev.filter(item=>item!=='L'):[...prev,'L'])}>L</div>
                         <div className={`px-[20px] py-[7px] rounded-lg bg-slate-400 text-[20px] hover:border-[#46d1f7] border-[2px] cursor-pointer ${sizes.includes("XL")?"bg-green-200 text-[black] border-[#46d1f7]":""}` }onClick={()=>SetSizes(prev=>prev.includes('XL')?prev.filter(item=>item!=='XL'):[...prev,'XL'])}>Xl</div>
                         <div className={`px-[20px] py-[7px] rounded-lg bg-slate-400 text-[20px] hover:border-[#46d1f7] border-[2px] cursor-pointer ${sizes.includes("XXL")?"bg-green-200 text-[black] border-[#46d1f7]":""}` }onClick={()=>SetSizes(prev=>prev.includes('XXL')?prev.filter(item=>item!=='XXL'):[...prev,'XXL'])}>XXl</div>
                    </div>
                      </div>
                      <div className='flex items-center justify-start gap-[10px] mt-[20px]'>
                              <input type="checkbox" id="checkbox" className='w-[25px] h-[25px] cursor-pointer' onChange={()=>setBestSeller(prev=>!prev)}/>
                              <label htmlFor='checkbox' className='text-[18px] md:text-[22px] font-semibold'>Add to BestSeller</label>
                      </div>
                   
                    <div>
                    <button className='w-[140px] px-[20px] py-[20px] rounded-lg bg-[#65d8f7] flex items-center justify-center gap-[10px] text-black active:bg-slate-700 active:text-white active:border-[2px] border-white'>{Loading?<Loading/>:"ADD PRODUCT"}</button>
            
            </div>
            </form>
          </div>
        </div>
      )
    }
    
    export default Add