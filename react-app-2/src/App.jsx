import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import RouterComponent from './RouterComponent.jsx'  // For learning routing and useNavigate hook

import Counter from './CustomHooks/Counter.jsx'  // Counter custom hook

import Hook1 from './CustomHooks/Hook1.jsx'   // fetch custom hook

function App() {

  return (
    <>
      {/* Routing */}
      <RouterComponent />


      {/* Custom Hooks */}
      
      {/* Counter Hook */}
      <Counter />

      {/* fetch custom hook */}
      <Hook1 />
    </>
  )
}

export default App
