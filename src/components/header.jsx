import React from 'react';



const Header=()=>{
    return(
<>
<div  className='h-15 flex justify-between items-center p-5 '>
    <div className=' text-gray-500 font-medium'>Gemini</div>
    <img src='/images/profilepic.png' className='w-10 rounded-full'></img>
</div>
</>
    )
}

export default Header;