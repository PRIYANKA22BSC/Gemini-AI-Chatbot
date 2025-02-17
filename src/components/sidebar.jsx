import React ,{useContext, useState} from 'react'
import { TbMenu2 } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { Apicontext } from '../context/context';

const Sidebar=()=>{
    const [extended,setExtended]=useState(false);
    const{onSent,prevprompt,setRecentprompt,setShowresult}=useContext(Apicontext);

   const loadchat=async(propmt)=>{
    setRecentprompt(prompt);
    await onSent(propmt);
   }

   const newchatbtn=(e)=>{
    setShowresult("");
   }

    return(
<div className=" bg-neutral-950 flex gap-4 flex-col lg:h-dvh  max-sm:h-full p-4">
<div className='  h-30  flex flex-col justify-between'>
<TbMenu2 className=' text-stone-400 text-3xl cursor-pointer' onClick={(e)=>setExtended((prev)=>!prev)} />
<div  className='text-stone-400 bg-neutral-800 py-2 flex justify-center items-center gap-2 px-2  rounded-full cursor-pointer'onClick={(e)=>newchatbtn()}><IoMdAdd className='text-2xl'/>{extended?<div>New Chat</div>:null}</div>
</div>
<div className='h-90 flex flex-col rounded-md text-stone-400'>
 {extended?<p className=' font-semibold'>Recent</p>:null} 
 {extended? <div className='mt-2 w-40 flex flex-col gap-2'>{prevprompt.length>0?
<>{prevprompt.map((ele,idx)=>{return(<div onClick={(e)=>loadchat (ele)} key={idx} className=' w-40 flex flex-row justify-items-start items-center gap-2  rounded-full py-1 cursor-pointer'><FiMessageSquare/>{ele.slice(0,10)}...</div>)})}</>:<p className='px-10 rounded-sm hover:bg-neutral-800'>No History</p>}</div>:null} 
   
</div>
<div className=' h-30 flex flex-col justify-between text-stone-400 max-sm:!mt-40'>
    <div className='flex gap-2 items-center'><IoMdHelpCircleOutline className='text-2xl' />{extended?<span>Help</span>:null}</div>
    <div  className='flex gap-2 items-center '>
    <FaClockRotateLeft className='text-xl' /> {extended?<span>Activity</span>:null}</div>
    <div  className='flex gap-2 items-center'><IoMdSettings className='text-xl' />{extended?<span>Settings</span>:null} </div>
</div>




</div>
    )
}

export default Sidebar;