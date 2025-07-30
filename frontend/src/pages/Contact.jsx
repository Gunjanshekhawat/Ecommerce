import React from 'react'
import Title from '../components/Title'
import contact from '../assets/contact.png'
import NewsLetterBox from '../components/NewLetterBox.jsx'
function Contact() {
  return (
    <div className='w-[99vw] min-h-[100vh] flex items-center justify-cenetr flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px]'>
      <Title text1={'CONTACT'} text2={'US'} />
      <div className='w-[100%] flex items-center justify-cenetr flex-col lg:flex-row'>
        <div className='lg:w-[50%] w-[100%] flex px-[50px] items-center justify-center'>
          <img src={contact} alt="" className='lg:w-[100%] w-[80%]  shadow-md shadow-black rounded-rm' />
        </div>
        <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]'>
          <p className='lg:w-[80%] w-[100%] text-[white] font-bold lg:text-[18px] text-[15px]'>Our Stores</p>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
            <p>12345 Random Stations</p>
            <p>random city,state,India</p>
          </p>
           <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
            <p>tel: +91-9812345**</p>
            <p>Email: admin@onecart.com</p>
          </p>
          <p className='lg:w-[80%] w-[100%] text-[15px] text-[white] lg:text-[18px] mt-[10px] font-bold'>Careers at OneCart</p>
          <p className=' lg:w-[80%] w-[100%] text-[15px] text-[white] lg:text-[16px] mt-[10px] font-bold'>Learn more about our teams and jon opening</p>
          <button className='px-[30px] py-[20px] flex items-center justify-center text-[white] bg-transparent border active:lg-slate-600 rounded-md'>Explore Jobs</button>
        </div>
  
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact