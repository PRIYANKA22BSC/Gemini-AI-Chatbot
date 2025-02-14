import React,{useContext, useState} from 'react'
import Header from './header';
import { ImCompass2 } from "react-icons/im";
import { GoLightBulb } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { AiOutlineAudio } from "react-icons/ai";
import { IoCodeSlashOutline } from "react-icons/io5";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { Apicontext } from '../context/context';



const Chat=()=>{
const {onSent,input,setInput,recentprompt,setRecentprompt,prevprompt,setPrevprompt,showresult,setShowresult,loading,setLoading,result,setResult}=useContext(Apicontext);



return(
<>
<div className='w-full flex flex-col'>
<Header/>
<div className='h-full  '>
<div className="mt-15   justify-start pl-24">
  <h1 className="font-semibold text-4xl bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 text-transparent bg-clip-text inline-block">
    Hello,Priyanka.
  </h1>
  <p className="font-semibold text-gray-400 text-4xl">How can I help you today?</p>
</div>

<div className=' mt-5 flex justify-start justify-self-center gap-2  p-2'>
    <div className='bg-gray-100 h-55 rounded-md w-60 flex flex-col  justify-between p-3'>
        <div>Suggest beautiful places to see on an on an upcoming road trip.</div>
        <div className='flex flex-row-reverse'>
        <ImCompass2 className='text-xl'/>
        </div>
    </div>
    <div className='bg-gray-100 h-55 rounded-md w-60 flex flex-col justify-between p-3'>
        <div>Suggest beautiful places to see on an on an upcoming road trip.</div>
        <div className='flex flex-row-reverse'>
        <GoLightBulb className='text-2xl' />
        </div>
    </div>
    <div className='bg-gray-100 h-55 rounded-md w-60 flex flex-col justify-between p-3'>
        <div>Suggest beautiful places to see on an on an upcoming road trip.</div>
        <div className='flex flex-row-reverse'>
        <FaRegMessage  className='text-xl'/>
        </div>
    </div>
    <div className='bg-gray-100 h-55 rounded-md w-60 flex flex-col justify-between p-3'>
        <div>Suggest beautiful places to see on an on an upcoming road trip.</div>
        <div className='flex flex-row-reverse'>
        <IoCodeSlashOutline  className='text-2xl'/>
    
        </div>
    </div>
   
</div>
<div className='bg-gray-100 flex justify-between items-center w-5xs mt-15 rounded-full justify-self-center'>
<input  value={input} onChange={(e)=>setInput(e.target.value)} type="text"  placeholder='Ask Gemini' className='w-4xl pl-2 py-4 rounded-full bg-gray-100 outline-0 '></input>
<div className=' flex mr-3 gap-2 '>
<MdOutlineAddPhotoAlternate className='text-2xl'/>
<AiOutlineAudio className='text-2xl' />
<IoMdSend className='text-2xl cursor-pointer' onClick={()=>onSent()} />
</div>
</div>
<p className='text-sm text-center'>Gemini may display inaccurate info,including about people,so double check its response.Your privacy and Gemini Apps</p>
</div>

</div>



</>
        
    )
}

export default Chat;