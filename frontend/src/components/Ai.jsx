/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import ai from '../assets/ai.png'
import { shopDataContext } from '../context/Shopcontext'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
function Ai() {
  let {showSearch,setshowSearch}=useContext(shopDataContext)
  let navigate=useNavigate()
  let [activeAi,setactiveAi]=useState(false)


  function speak(message)
  {
  let utterence=new SpeechSynthesisUtterance(message)
  window.speechSynthesis.speak(utterence)
  }

  const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition
  const recognition=new SpeechRecognition()
  if(!recognition)
  {
    console.log("not supported")
  }
  recognition.onresult=(e)=>{
   const transcript=e.results[0][0].transcript.trim()
   if(transcript.toLowerCase().includes("search")&&transcript.toLowerCase().includes("open")&&!showSearch)
   {
     speak("opening search")
     setshowSearch(true)
     navigate("/collections")
   }
   else if(transcript.toLowerCase().includes("search")&&transcript.toLowerCase().includes("close")&&!showSearch)
   {
     speak("closing search")
     setshowSearch(false)
     
   }
   else if(transcript.toLowerCase().includes("collection")||transcript.toLowerCase().includes("collections")||transcript.toLowerCase().includes("products")||transcript.toLowerCase().includes("product"))
   {
     speak("opening collection page")
     navigate("/collections")
   }
   else if(transcript.toLowerCase().includes("about")||transcript.toLowerCase().includes("aboutpage"))
   {
     speak("opening about page")
     navigate("/about")
     setshowSearch(false)
   }
   else if(transcript.toLowerCase().includes("home")||transcript.toLowerCase().includes("homepage"))
   {
     speak("opening home page")
     navigate("/")
     setshowSearch(false)
   }
    else if(transcript.toLowerCase().includes("cart")||transcript.toLowerCase().includes("kart")||transcript.toLowerCase().includes("caat"))
   {
     speak("opening cart page")
     navigate("/cart")
     setshowSearch(false)
   }
   else if(transcript.toLowerCase().includes("contact"))
   {
     speak("opening contact page")
     navigate("/contacts")
     setshowSearch(false)
   }
   
    else if(transcript.toLowerCase().includes("order")||transcript.toLowerCase().includes("myorders")||transcript.toLowerCase().includes("my order")||transcript.toLowerCase().includes("orders"))
   {
     speak("opening cart page")
     navigate("/cart")
     setshowSearch(false)
   }
   else
   {
    toast.error("Try Again");
    
   }

  }
  recognition.onend=()=>{
    setactiveAi(false)
  }
  return (
    <div 
  className='fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%]'
  onClick={() => {
    recognition.start();
    setactiveAi(true);
  }}
>
  <img 
    src={ai} 
    className={`w-[100px] cursor-pointer translate-x-[10%] translate-y-[10%] scale-125`} 
    style={{
      filter: activeAi 
        ? "drop-shadow(0px 0px 30px #00d2fc)" 
        : "drop-shadow(0px 0px 20px black)"
    }} 
  />
</div>

  )
}

export default Ai