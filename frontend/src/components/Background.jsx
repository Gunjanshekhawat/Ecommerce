import React from 'react'
import front from '../assets/front.jpg'
import front1 from '../assets/front1.jpg'
import front2 from '../assets/front2.jpg'
import front3 from '../assets/front3.jpg'
const Background = ({HeroCount}) => {
  console.log(HeroCount)
    if(HeroCount===0)
    {
         return <img src={front} alt=""  className='w-[50%] h-[100vh] float-left overflow-auto object-cover absolute  left-[50%]'/>
    }
    else if(HeroCount===1)
    {
            return <img src={front1} alt="" className='w-[50%] h-[100vh] float-left overflow-auto object-cover absolute  left-[50%]'/>
    }
    else if(HeroCount===2)
    {
             return <img src={front2} alt=""  className='w-[50%] h-[100vh] float-left overflow-auto object-cover  absolute left-[50%]'/>
    }
    else{
            return <img src={front3} alt="" className='w-[50%] h-[100vh] float-left overflow-auto object-cover  absolute left-[50%]'/>
    }
  
}

export default Background