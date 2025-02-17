import React,{useContext} from 'react'
import Header from './header';
import { ImCompass2 } from "react-icons/im";
import { GoLightBulb } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { IoCodeSlashOutline } from "react-icons/io5";
/*import { AiOutlineAudio } from "react-icons/ai";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";*/
import { Apicontext } from '../context/context';





const Chat=()=>{
const {onSent,input,setInput,recentprompt,setRecentprompt,prevprompt,setPrevprompt,showresult,setShowresult,loading,setLoading,result,setResult,newchat}=useContext(Apicontext);

const suggest=async(e)=>{
    setRecentprompt(e);
    await onSent(e);

}



return(
<>
<div className='w-full flex flex-col  '>
<Header/>
<div className='lg:h-full  bg-neutral-800  max-sm:h-full '>
  
        {!showresult?<><div className="  lg:!mt-15 lg:justify-start lg:justify-self-center lg:w-5xl max-sm:!mt-8">
       <h1 className=" font-semibold lg:text-4xl  max-sm:text-3xl bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 text-transparent bg-clip-text inline-block pl-5 ">
        Hello,Priyanka.
       </h1>
         <p className="font-semibold text-stone-400  lg:text-4xl   pl-5" id="help-greet">How can I help you today?</p>
          </div>

     <div  className=' text-stone-400  !mt-5  lg:grid lg:grid-cols-4 lg:place-self-center lg:gap-2  lg:w-5xl !p-2'>
      <div onClick={(e)=>suggest(e.target.textContent)} className='bg-neutral-900  lg:h-55 rounded-md    max-sm:h-30  flex flex-col  justify-between p-3 '>
        <div >Suggest beautiful places to see on an upcoming road trip.</div>
        <div className='flex flex-row-reverse'>
        <ImCompass2 className='text-xl'/>
        </div>
         </div>
       <div onClick={(e)=>suggest(e.target.textContent)} className='bg-neutral-900  lg:h-55 rounded-md lg:w-60 max-sm:h-30  flex flex-col justify-between p-3 max-sm:!mt-2'>
        <div  >Briefly summarize this concept:urban planning.</div>
        <div className='flex flex-row-reverse'>
        <GoLightBulb className='text-2xl' />
        </div>
       </div>
       <div onClick={(e)=>suggest(e.target.textContent)} className='bg-neutral-900  lg:h-55 rounded-md lg:w-60 max-sm:h-30  flex flex-col justify-between p-3 max-sm:!mt-2'>
        <div   >Brainstorming team bonding activities for our work retreat.</div>
        <div className='flex flex-row-reverse'>
        <FaRegMessage  className='text-xl'/>
        </div>
       </div>
       <div onClick={(e)=>suggest(e.target.textContent)} className='bg-neutral-900  lg:h-55 rounded-md lg:w-60 max-sm:h-30  flex flex-col justify-between p-3 max-sm:!mt-2'>
        <div  > Write a Python function that calculates the factorial of a number.</div>
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
    <div className='!mt-8 flex items-start gap-4 justify-start justify-self-center w-5xl  h-70'>
    <img src='/images/gemini-logo.png' className='w-10 animate-pulse'></img>
    {loading?<div className=" !mt-2  flex flex-col gap-2 justify-start justify-self-center h-80 w-5xs animate-pulse">

<div className='bg-gray-500 rounded-sm py-2 w-4xl'></div>
<div className='bg-gray-500 rounded-sm py-2 w-4l'></div>
<div className='bg-gray-500 rounded-sm py-2 w-4xl'></div>

</div>:<div  className='text-stone-100' dangerouslySetInnerHTML={{ __html: result}} />}
    </div>
</div>

</>}
    
    


<div className='bg-neutral-900   text-stone-400 lg:flex lg:items-center lg:justify-between lg:place-self-center lg:w-5xl !mt-15 rounded-full lg:justify-self-center max-sm:3xl  max-sm:flex max-sm:justify-between max-sm:items-center max-sm:justify-self-center  max-sm:w-65 '>
<input  value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Ask Gemini' className=' bg-neutral-900 max-sm:px-8 lg:w-4xl  lg:pl-3 lg:py-4 rounded-full text-stone-400 max-sm:py-3 max-sm:w-50 outline-0  '></input>
<div className=' flex  !mr-3 gap-2 '>
{/*<MdOutlineAddPhotoAlternate className='text-2xl'/>
<AiOutlineAudio className='text-2xl' />*/}
<IoMdSend className='text-2xl cursor-pointer' onClick={()=>onSent()} />
</div>
</div>
<p className='text-sm text-center text-stone-400 max-sm:!mt-2' id='information'>Gemini may display inaccurate info,including about people,so double check its response.Your privacy and Gemini Apps</p>
</div>

</div>



</>
        
    )
}

export default Chat;