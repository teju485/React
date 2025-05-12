import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("green")

  return (
    <>
    <div className='w-full h-screen  fixed' style={{backgroundColor:color}}>
      <div className='flex bg-white px-2 py-3 rounded-2xl absolute top-5 m-5 flex-col gap-y-3'>
       <button
        onClick={()=>setColor("red")}
        className='px-4 py-1 rounded-2xl flex  mx-2 bg-red-500 cursor-pointer justify-center'>red</button>
       <button
        onClick={()=>setColor("green")}
        className='px-4  bg-green-500 py-1 rounded-2xl flex  mx-2 cursor-pointer justify-center'>green</button>
       <button 
       onClick={()=>setColor("yellow")}
       className='px-4  bg-yellow-500 py-1 rounded-2xl flex mx-2 cursor-pointer justify-center'>yellow</button>
        <button 
       onClick={()=>setColor("pink")}
       className='px-4  bg-pink-500 py-1 rounded-2xl flex mx-2 cursor-pointer justify-center'>pink</button>
        <button 
       onClick={()=>setColor("black")}
       className='px-4 bg-black text-white py-1 rounded-2xl flex mx-2 cursor-pointer justify-center'>black</button>

      </div>

    </div>
    </>
  )
}

export default App
