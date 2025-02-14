import React ,{useContext, useState} from 'react'
import { TbMenu2 } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { Apicontext } from '../context/context';
const Sidebar=()=>{
    const [extended,setExtended]=useState(true);
    const{prevprompt,setPrevprompt}=useContext(Apicontext);

    return(
<div className=" bg-gray-100  flex gap-4 flex-col h-dvh p-4">
<div className='  h-30  flex flex-col justify-between'>
<TbMenu2 className='text-3xl cursor-pointer' onClick={(e)=>setExtended((prev)=>!prev)} />
<div  className='text-gray-500 bg-gray-200 py-2 flex justify-center items-center gap-2 px-2  rounded-full'><IoMdAdd className='text-2xl'/>{extended?<div>New Chat</div>:null}</div>
</div>
<div className='h-90 rounded-md '>
 {extended?<p className=' font-semibold'>Recent</p>:null}  
 {prevprompt.length>0?(
  prevprompt.map((ele,idx)=>{
    return 
    (<>
   {extended? <div key={idx} className='mt-2 hover:bg-gray-200 py-3  w-40 flex justify-center items-center gap-2 px-2  rounded-full'><FiMessageSquare />{ele}</div>:null} 
  
   </>  
    )
   
  })
 ):<div className='mt-2 hover:bg-gray-200 py-3  w-40 flex justify-center items-center gap-2 px-2  rounded-full'>History</div>}

</div>

<div className=' h-30 flex flex-col justify-between'>
    <div className='flex gap-2 items-center'><IoMdHelpCircleOutline className='text-2xl' />{extended?<span>Help</span>:null}</div>
    <div  className='flex gap-2 items-center '>
    <FaClockRotateLeft className='text-xl' /> {extended?<span>Activity</span>:null}</div>
    <div  className='flex gap-2 items-center'><IoMdSettings className='text-xl' />{extended?<span>Settings</span>:null} </div>
</div>




</div>
    )
}

export default Sidebar;