import React,{useContext} from 'react'
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
const {onSent,input,setInput,recentprompt,setRecentprompt,prevprompt,setPrevprompt,showresult,setShowresult,loading,setLoading,result,setResult,newchat}=useContext(Apicontext);

return(
<>
<div className='w-full flex flex-col'>
<Header/>
<div className='h-full bg-neutral-800  '>
  
        {!showresult?<><div className="  mt-15 justify-start justify-self-center w-5xl">
       <h1 className=" font-semibold text-4xl bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 text-transparent bg-clip-text inline-block pl-5 ">
        Hello,Priyanka.
       </h1>
         <p className="font-semibold text-stone-400  text-4xl pl-5">How can I help you today?</p>
          </div>

     <div className=' text-stone-400  mt-5 flex justify-start justify-self-center gap-2  p-2'>
      <div className='bg-neutral-900  h-55 rounded-md w-60 flex flex-col  justify-between p-3'>
        <div>Suggest beautiful places to see on an on an upcoming road trip.</div>
        <div className='flex flex-row-reverse'>
        <ImCompass2 className='text-xl'/>
        </div>
         </div>
       <div className='bg-neutral-900  h-55 rounded-md w-60 flex flex-col justify-between p-3'>
        <div>Suggest beautiful places to see on an on an upcoming road trip.</div>
        <div className='flex flex-row-reverse'>
        <GoLightBulb className='text-2xl' />
        </div>
       </div>
       <div className='bg-neutral-900  h-55 rounded-md w-60 flex flex-col justify-between p-3'>
        <div  >Suggest beautiful places to see on an on an upcoming road trip.</div>
        <div className='flex flex-row-reverse'>
        <FaRegMessage  className='text-xl'/>
        </div>
       </div>
       <div className='bg-neutral-900  h-55 rounded-md w-60 flex flex-col justify-between p-3'>
        <div>Suggest beautiful places to see on an on an upcoming road trip.</div>
        <div className='flex flex-row-reverse'>
        <IoCodeSlashOutline  className='text-2xl'/>
    
        </div>
       </div>
   
</div></>:<>

<div className='overflow-y-auto'  >
    
    <div className='mt-10 justify-start justify-self-center w-5xl flex items-center gap-4 text-stone-100 '>
        <img src='/images/profilepic.png' className='w-10 rounded-full'></img>
        <div className='flex flex-col'>
        <p>{recentprompt}</p>
        </div>
      
    </div>
    <div className='mt-8 flex items-start gap-4 justify-start justify-self-center w-5xl  h-70'>
    <img src='/images/gemini-logo.png' className='w-10 animate-pulse'></img>
    {loading?<div className=" mt-2  flex flex-col gap-2 justify-start justify-self-center h-80 w-5xs animate-pulse">

<div className='bg-gray-500 rounded-sm py-2 w-4xl'></div>
<div className='bg-gray-500 rounded-sm py-2 w-4l'></div>
<div className='bg-gray-500 rounded-sm py-2 w-4xl'></div>

</div>:<div  className='text-stone-100' dangerouslySetInnerHTML={{ __html: result}} />}
    </div>
</div>

</>}
    
    


<div className='text-stone-400 bg-neutral-900 flex justify-between items-center w-5xs mt-15 rounded-full justify-self-center'>
<input  value={input} onChange={(e)=>setInput(e.target.textContent)} type="text"  placeholder='Ask Gemini' className='w-4xl pl-3 py-4 rounded-full text-stone-400 bg-neutral-900   outline-0 '></input>
<div className=' flex mr-3 gap-2 '>
<MdOutlineAddPhotoAlternate className='text-2xl'/>
<AiOutlineAudio className='text-2xl' />
<IoMdSend className='text-2xl cursor-pointer' onClick={()=>onSent()} />
</div>
</div>
<p className='text-sm text-center text-stone-400 '>Gemini may display inaccurate info,including about people,so double check its response.Your privacy and Gemini Apps</p>
</div>

</div>



</>
        
    )
}

export default Chat;