import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import RouterComponent from './RouterComponent.jsx'  // For learning routing and useNavigate hook

import Counter from './CustomHooks/Counter.jsx'  // Counter custom hook

import Hook1 from './CustomHooks/Hook1.jsx'   // fetch custom hook

import Counter1 from './AdditionalHooks/Counter1.jsx'  // useReducer Hook

function App() {

  // useReducer Hook is a react hook used for state management. Alternative of useState hook. Preferable for complex state management.
  // Syntax:  const [state, dispatch]=useReducer(reducer, initialState). useReducer is a React Hook, like useState, used to manage more complex state logic, it takes two arguments.    And reducer is a function that takes state and action as arguments and returns new state.  reducer(currentState, action)



  return (
    <>
      {/* Routing */}
      <RouterComponent />


      {/* Custom Hooks */}

      {/* Counter Hook */}
      <Counter />

      {/* fetch custom hook */}
      <Hook1 />


      {/* Additional Hooks */}

      {/* useReducer Hook */}
      <Counter1 />
    </>
  )
}

export default App
