import React from 'react'
import { MdAddCircleOutline } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
function Sidebar() {
    const navigate=useNavigate()
  return (
    <div className='w-[16%] min-h-[100vh] border-r-[1px] py-[60px] fixed left-0,top-0'>
        <div className='flex flex-col gap-4 pt-[40px] pl-[20%] text-[25px]'>
            <div className='flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer' onClick={()=>navigate("/add")}>
                <MdAddCircleOutline className='w-[25px] h-[25px] '/>
                <p className='hidden md:block'>Add Items</p>
            </div>
              <div className='flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer' onClick={()=>navigate("/lists")}>
                <FaRegListAlt className='w-[25px] h-[25px]'/>
                <p className='hidden md:block'>List Items</p>
            </div>
              <div className='flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer' onClick={()=>navigate("/orders")}>
                <SiTicktick className='w-[25px] h-[25px] '/>
                <p className='hidden md:block'>View Orders</p>
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar