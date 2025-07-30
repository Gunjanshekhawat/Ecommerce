import React, { useEffect, useState } from 'react'
import Background from '../../components/Background.jsx'
import Hero from '../../components/Hero'
import Products from '../Products.jsx'
import OurPolicy from '../../components/OurPolicy.jsx'
import NewLetterBox from '../../components/NewLetterBox.jsx'
import Footer from '../../components/Footer.jsx'

const Home = () => {
  let HeroData=[{text1:"30% OFF Limited offer",text2:"style that"},{text1:"Discover the best of Bold Fashion",text2:"Limited Time Only!"},{text1:"Explore Our Best Collection",text2:"Show Now!"},{text1:"Choose your perfect fashion fit",text2:"Now on Sale!"}]
   let [HeroCount,setHeroCount]=useState(0)
   useEffect(()=>{
    let interval=setInterval(()=>{
      setHeroCount(prevCount=>prevCount===3?0:prevCount+1)
    },3000)
    return ()=>clearInterval(interval)
   },[])
   
  return (
     <div className='overflow-x-hidden relative top-[70px]'>
    <div className='w-[110vw] lg:h-[100vh] md:h-[50vh] sm:h-[30vh] bg-gradient-to-l from-[#141414] to-[#0c2025]'>
    <Background HeroCount={HeroCount}/>
    <Hero HeroCount={HeroCount} setHeroCount={setHeroCount} HeroData={HeroData[HeroCount]}/>
     </div>
     <div>
     <Products/>
     <OurPolicy/>
     <NewLetterBox/>
     <Footer/>

     </div>
    </div>

  )
}

export default Home