import React from 'react'
import about from '../assets/about.png'
import Title from '../components/Title'
import NewLetterBox from '../components/NewLetterBox.jsx'
function About() {
  return (
    <div className='w-[99vw] md:w-[100vw] min-h-[100vh]  flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px]'>
      <Title text1={"ABOUT"} text2={"US"}/>
      <div className='w-[100%] flex items-start justify-center flex-col lg:flex-row'>
        <div className='lg:w-[50%] w-[100%] flex items-center justify-center py-[10px]'>
          <img src={about} className='lg:w-[65%] w-[80%] h-[45%] shadow-md shadow-black rounded-sm ' alt="" />
        </div>
        <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]'>
          <p className=''></p>
          <p className='lg:w-[80%] w-[100%] text-white md:text-[16px] text-[15px] '>OneCart born for samrt,seamless shopping-created to deliever quality-products ,trending styles ,and everyday essentials in one place. With reliable service ,fast delivery ,and great value ,OneCart makes your online shopping experience simple ,satisfying , and stress-free.</p>
          <p className='lg:w-[80%] w-[100%] text-white md:text-[16px] text-[15px] '>modern shoppers-combining style ,convenience,and affordability ,whether it's fashion,essentials or trends ,we bring everthing you need to one trusted platform with fast delivery, easy returns ,and a customer-first shopping expeirence you'll love. </p>
          <p className='lg:w-[80%] w-[100%] text-[20px]  text-white lg:text-[18px] mt-[10px] font-bold '>Our Mission</p>
          <p className='lg:w-[80%] w-[100%] text-white md:text-[16px] text-[15px] '>Our Mission is to redifine online shopping by delivering quality ,affordability and convenience.OneCart connects customers with trusted products and brands ,offering a seamless ,customer-focused experience that saves time add value ,and fits every lifestyle and need.</p>
        </div>
      </div>
      <div className='w-[100%] flex items-center justify-center flex-col gap-[10px]'>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
        <div className='w-[80%] flex items-center justify-center gap-[10px] lg:flex-row flex-col py-[40px]'>
          <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]'>
            <b className='text-[20px] font-semibold text-[#bff1f9]'>Quality Assurance</b>
            <p>We guarantee quality through strict checks,reliable sourcing, and a comitment to customer staisfaction always.</p>
          </div>
          <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]'>
            <b className='text-[20px] font-semibold text-[#bff1f9]'>Convenience</b>
            <p>shop easily with fast delivery,simple navigation,secure checkout,and everything you need in one place</p>
          </div>
          <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]'>
            <b className='text-[20px] font-semibold text-[#bff1f9]'>Exceptional Customer Service</b>
            <p>Our dedicated support team ensures quick responses,helpful solutions,and a smooth shopping experience everytime.</p>
          </div>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  )
}

export default About