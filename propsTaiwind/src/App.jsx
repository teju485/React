import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import Card from './components/card'

function App() {
  // const [count, setCount] = useState(0)
let  info= {
      username:"teju",
      number:1234
    }
    let newArr=[1,2,34]
  return (
   
    <>
      <h1 className='bg-green-300 p-2 m-3 w-auto' > Tailwind css Example</h1>
      <Card username="chai our code" myname={info} arr={ newArr }/>

      <Card cardname="teju" />
    </>
  )
}

export default App
