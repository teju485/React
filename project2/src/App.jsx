import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
function App() {
  // const [counter,setcounter]=useState(10)
  // //function addvalue button
  // const addvalue = ()=>{
  // setcounter( counter < 20 ?counter+1 : console.log("limit is 20"))
  // console.log("updated by ",counter);
    
  // }
  // //function for remove  counter button 
  // const removeValue=()=>{
  //   setcounter(counter > 0 ? counter-1 : console.log("limit is 0"))
  //  if(!setcounter)
  //  {console.log("finshed");}

  // }
  
  
  
  return (
    <>
    <p>Chai our a teju</p>
    <h2> counter value {counter}</h2>
    <button onClick={addvalue}>Add value</button><br />
    <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
