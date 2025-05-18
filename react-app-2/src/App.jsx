import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import RouterComponent from './RouterComponent.jsx'  // For learning routing and useNavigate hook

import Counter from './CustomHooks/Counter.jsx'  // Counter custom hook

import Hook1 from './CustomHooks/Hook1.jsx'   // fetch custom hook

import Counter1 from './AdditionalHooks/Counter1.jsx'  // useReducer Hook

import Counter2 from './AdditionalHooks/Counter2.jsx'   // useCallback Hook

import MemoHook from './AdditionalHooks/MemoHook.jsx'   // useMemo Hook

function App() {

  // useReducer Hook is a react hook used for state management. Alternative of useState hook. Preferable for complex state management.
  // Syntax:  const [state, dispatch]=useReducer(reducer, initialState). useReducer is a React Hook, like useState, used to manage more complex state logic, it takes two arguments.    And reducer is a function that takes state and action as arguments and returns new state.  reducer(currentState, action)

//   useCallback: Prevent unnecessary re-creation of a function	
//   React.memo:  Prevent unnecessary re-render of a component	
// it's not always necessary to use both useCallback and React.memo together, but they work best as a team in specific scenarios.



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

      {/* useCallback Hook */}
      <Counter2 />

      {/* useMemo Hook */}
      <MemoHook />
    </>
  )
}

export default App
