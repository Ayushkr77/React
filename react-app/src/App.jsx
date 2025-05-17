import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx"; // For learning css

import Student from "./Student.jsx";  // For learning props

import UserGreeting from "./UserGreeting.jsx"; // For learning conditional rendering

import List from "./List.jsx";  // For learning render lists

import Button1 from "./Button1.jsx"; // For learning click events

import MyComponent from "./MyComponent.jsx";  // For learning useState

import Counter from "./Counter.jsx";  // Counter

import MyComponent1 from "./MyComponent1.jsx";  // For learning onChange

import ColorPicker from "./ColorPicker.jsx";  // ColorPicker

import Counter1 from "./Counter1.jsx";  // For learning updater function

import MyComponent2 from "./MyComponent2.jsx";  // For learning update Objects in state

import MyComponent3 from "./MyComponent3.jsx";   // For learning update Arrays in state

import MyComponent4 from "./MyComponent4.jsx";  // // For learning update Array of objects in state

import TodoList from "./todoList.jsx";  // todo List

import MyComponent5 from "./MyComponent5.jsx";  // For learning useEffect()

import MyComponent6 from "./MyComponent6.jsx";  // Window height and width

import DigitalClock from "./DigitalClock.jsx";  // Digital Clock

import ComponentA from "./ComponentA.jsx";  // useContext

import MyComponent7 from "./MyComponent7.jsx";  // For learning useRef


function App() {

  // props: read-only components that are shared between components. a parent component can send data to a child component.  <Component key=value/>

  // Conditional Rendering: allows u to control what gets rendered in ur applcation based on certain conditions(show, hide or change components)

  // Click event: an interaction when a user clicks on a specific element. We can respond to clicks by passing a callback to the onClick event handler.


  // State is used to store data that can change in a component. It is an object that stores some data that can change over time.

  
  // React Hook: Special function that allows functional components to use react feature without writing class components. (useState, useEffect, useReducer, useContext, useCallback and more...)

  // useState: a react hook that allows the creation of a stateful variable and a setter function to update its value in the virtual DOM.

  // onChange: event handler used primarily with form elements ex.: <input>, <textarea>, <select>, <radio>. Triggers a function every time the value of the input changes

  // updater function: a function passed as an argument to setState() usually. ex.: setYear(year+1). Allow for safe updates based on the previous state. Used with multiple state updates and asynchronous functions. Good practice to use updater functions

// useEffect is a React Hook that lets you run side effects in function components..
// Side effects are anything that happens outside the component itself or interacts with the outside world, like:Fetching data from an API Setting up timers (setInterval, setTimeout) Listening to scroll or resize events Manipulating the DOM directly Subscribing/unsubscribing to data streams

  // useEffect(): react hook that tells react to do some code when(pick one): this component re-renders, this component mounts, the state of a value changes
  // useEffect(function, [dependencies])
  // useEffect(()=>{})   runs aftere every re-render
  // useEffect(function, [])   runs only on mount, runs once after the first render
  // useEffect(()={}, [value])   runs once on mount+when value changes
  // Uses: event listeners, DOM manipulation, Subscriptions(real-time updates), fetching data from an API, clean up when a component unmounts
  // mounting means when we add component to DOM, and unmounting means when we remove any component


// useContext(): react hook that allows u to share values between multiple levels of components without passing props through each level.

// Provider component 3 steps
// i) import { createContext } from 'react';
// ii) export const MyContext = createContext();
// iii) <MyContext.Provider value={value}>
          // <Child />
     // </MyContext.Provider>


  // useRef(): use reference does not cause re-renders when its value changes. when u want a component to remember some information, but u dont want that info to trigger new renders
  // i) accessing/interacting with DOM elements. ii) handling focus, animations and transitions. iii) managing timers and intervals
  // useState triggers re-renders, but useRef does not.





  return (
    <>
      <Header/>
      <Food /> 
      <Card /> 
      <Button />  {/* For learning css*/}
      <Footer/>  


      {/* Props */}
      <Student name="Ayush" age="25" isStudent={true}/>
      <Student name="Rahul" age={27} isStudent={false}/>
      <Student name="Ram" age={34} isStudent={true}/>


      {/* Conditional Rendering */}
      <UserGreeting isLoggedIn={true} username="ayush"/>

      {/* Render Lists */}
      <List />

      {/* Click events */}
      <Button1 />

      {/* useState */}
      <MyComponent />

      {/* Counter */}
      <Counter />

      {/* onChange */}
      <MyComponent1 />

      {/* Color Picker */}
      <ColorPicker />

      {/* Updater Function */}
      <Counter1 />

      {/* Update objects in state */}
      <MyComponent2 />

      {/* Update arrays in state */}
      <MyComponent3 />

      {/* Update array of objects in state */}
      <MyComponent4 />

      {/* Todo List */}
      <TodoList />

      {/* useEffect() */}
      <MyComponent5 />

      {/* Window height and width */}
      <MyComponent6 />

      {/* Digital Clock */}
      <DigitalClock />

      {/* useContext */}
      <ComponentA />

      {/* useRef */}
      <MyComponent7 />
    </>
  );
}

export default App
