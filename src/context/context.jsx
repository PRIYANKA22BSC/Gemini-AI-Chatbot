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

const delay=(index,nextword)=>{
    setTimeout(()=>{
          setResult(prev=>prev+nextword);
    },10*index);
}
const onSent=async(prompt)=>{
setInput("");
setResult("");
setLoading(true);
setShowresult(true);
let response;
if(prompt !== undefined){
    response = await run(prompt);
    setRecentprompt(prompt);
}
else{
    setPrevprompt(prev=>[...prev,input]);
    setRecentprompt(input);
    response=await run(input); 
}

let responseArray = response.split("**");
let newResponse = "";

for (let i = 0; i < responseArray.length; i++) {
    if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i]; 
    } else {
        newResponse += `<b> ${responseArray[i]}  </b>`
    }
}
let renewResponse=newResponse.split("*").join("</br>");
let newResponseArray=renewResponse.split("");
for(let i=0;i<newResponseArray.length; i++){
    const nextword=newResponseArray[i];
    delay(i,nextword+"");
}
setLoading(false);


}





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






