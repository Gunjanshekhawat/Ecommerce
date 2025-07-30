/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../context/Shopcontext'
import { RiStarSFill } from "react-icons/ri";
import RelatedProducts from './RelatedProducts';
import Title from './Title.jsx';

function ProductDetail() {
  const { productId } = useParams();
  const { products, currency,addToCart} = useContext(shopDataContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [image4, setImage4] = useState('');
  const [size,setSize]=useState([])
 const fetchProductData = () => {
  
      const item = products.find((item) => item._id === productId);
    
      if (item) {
        setProductData(item);
        setImage1(item.image1);
        setImage2(item.image2);
        setImage3(item.image3);
        setImage4(item.image4);
        setImage(item.image1);
      }
      
    };
    
  useEffect(() => {
 
    fetchProductData();
  }, [products, productId]);

  if (!productData) return <div className='opacity-0'></div>;

  return (
    <div>
    <div className='lg:w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-r items-start justify-start gap-[20px] pt-[90px]'>
      
     
      <div className='w-full md:w-[90vw] h-[83vh] flex flex-col items-start justify-start gap-[30px]'>
        <div className=' w-[50vw] flex flex-wrap md:flex-row flex-col items-start justify-center gap-[20px]'>
          
          <div className='flex md:flex-col flex-row gap-[10px]'>
            {[image1, image2, image3, image4].map((img, idx) => (
              <div key={idx} className='w-[200px] h-[200px] bg-slate-300 border border-gray-400 rounded-md overflow-hidden'>
                <img src={img} alt="" className='w-full h-full object-cover cursor-pointer' onClick={() => setImage(img)}/>
              </div>
            ))}
          </div>
          <div className='w-[500px] h-[100%] border border-gray-400 rounded-md overflow-hidden'>
            <img src={image} alt="product" className='w-full h-full object-cover rounded-md'/>
          </div>
        </div>
      </div>

    
      <div className='lg:w-[50vw] w-[90vw] flex flex-col items-start justify-start gap-[30px]'>
        <h1 className='text-[32px] md:text-[40px] font-semibold text-[#5aaaf0]   '>
          {productData.name.toUpperCase()}
        </h1>

       
        <div className='flex items-center gap-1 pl-[0] px-[0] py-[0]'>
          {[...Array(5)].map((_, i) => (
            <RiStarSFill key={i} className='text-[20px] fill-[#FFD700]' />
          ))}
          <p className='text-[18px] font-semibold pl-[5px] text-[white]'>{124}</p>
        </div>
        <p className='text-[30px] font-semibold pl-[5px] text-white '>{currency} {productData.price}</p>
        <p className='w-[80%] md:w-[60%] text-[20px] font-semibold pl-[5px] text-[white]'>{productData.description} From everyday essentials to statement pieces, each garment is crafted with high-quality fabrics and attention to detail—perfect for elevating your wardrobe, no matter the occasion."</p>
        <div className='flex flex-col gap-[30px] my-[10px]'>
          <p className='text-[25px] font-semibold pl-[5px] text-white'>Select Size</p>
          <div className='flex gap-2'>
            {
              productData.sizes.map((item,index)=>{
              return <button key={index} className={`border py-2 px-4 bg-slate-300 rounded-md ${item==size?'bg-black text-[#3f88c9] text-[20px]':''}`} onClick={()=>setSize(item)}>{item}</button>
              })
            }
          </div>
          <button className='text-[16px] active:bg-slate-500 cursor-pointer bg-[#495b61c9] py-[10px] px-[20px] rounded-2xl mt-[10px] border-[1px] border-[#80808049] text-white shadow-md shadow-black' onClick={()=>addToCart(productData._id,size)}>Add to Cart</button>
        </div>
       <div className='w-[90%] pb-[20px] h-[1px] bg-slate-700 '></div>
       <div className='w-[80%] text-[16px] text-white'>
        <p className='text-[25px]'>100% Original Product.</p>
        <p className='text-[25px]'>Easy return and exchange policy within 7 days</p>
       </div>
      </div>
     </div>
    <div className='w-[100%] min-h-[70vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-start px-[30px]justify-start flex-col overflow '>
      <div className='flex width-[70px] h-[50px] px-[20px] mt-[90px] lg:ml-[80px] ml-[0px] lg:mt-[0px]'>
        <p className='border px-5 py-3 text-sm text-white'>Description</p>
        <p className='border px-5 py-3 text-sm text-white'>Reviews (124)</p>
        
      </div>
      <div className='w-[80%] md:h-[150px] h-[220px] bg-[#3336397c] border text-white text-[13px] md:text-[15px] lg:text-[20px] md:px-[30px] lg:ml-[100px] ml-[20px]'>
        <p className='w-[95%] h-[90%] flex items-center justify-center '>
          Upgarde your wardobe with this stylish slim-fit cotton shirt,available now on OneCart.Crafted from breathable high-quality fabric ,it offers all-day comfort and effortless style .Easy to maintain and perfect for any setting ,this shirt is a must-have essentail for those who value both fashion and function 
        </p>
      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} currentProductId={productData._id}/>
    </div>
    </div>
  );
}

export default ProductDetail;
