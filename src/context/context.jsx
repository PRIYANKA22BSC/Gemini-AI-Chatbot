import React from 'react';
import { createContext ,useState} from 'react';
import run from '../config/gemini.js';




export const Apicontext=createContext();
const ApiProvider=({children})=>{
    const[input,setInput]=useState("");
    const[recentprompt,setRecentprompt]=useState("");
    const[prevprompt,setPrevprompt]=useState([]);
    const[showresult,setShowresult]=useState(false);
    const[loading,setLoading]=useState(false);
    const[result,setResult]=useState("");

const onSent=async(prompt)=>{
    setInput("");
    setRecentprompt(input);
    setLoading(true); 
    const response=await run(input);
    setResult(response);
    setLoading(false);
    setShowresult(true);
   setPrevprompt(prev=>[...prev,recentprompt]);
  
}
console.log(prevprompt);


    const contextvalue={
    onSent,
     input,
     setInput,
     recentprompt,
     setRecentprompt,
     prevprompt,
     setPrevprompt,
     showresult,
     setShowresult,
     loading,
     setLoading,
     result,
     setResult
    };
   
    return (
        <>
        <Apicontext.Provider value={contextvalue}>{children}</Apicontext.Provider>
        </>
    )
}

export default ApiProvider;






