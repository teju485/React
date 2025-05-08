//babbles

import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
function Myapp(){
  return(
  <div>
    <p>Hello every one</p>
  </div>
  )
}

// const ReactElement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_balnk'

//   },
//   children:'Click me to visit google'

// }

const AnothetElement = (
  <a href='https://google.com' target='_balnk'>visit google</a>
)

const username = 'Iam Teju'//evalueted expression
const ReactElement = React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank'
  },
  'visist google',
  username
)

createRoot(document.getElementById('root'))
.render(
  ReactElement
  //not exixutable because another element is method
  // <>
  
  // <App/>
  // <h3>ha ha aha a</h3>
  // </>
  )



