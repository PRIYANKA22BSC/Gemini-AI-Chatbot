import React from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import Chat from './components/chat'




function App() {


  return (
    <>
    <div className='flex flex-row'>
    <Sidebar/>
    <Chat/>
    </div>
   
    </>
  )
}

export default App
