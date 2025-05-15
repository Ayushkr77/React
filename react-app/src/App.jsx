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


function App() {

  // props: read-only components that are shared between components. a parent component can send data to a child component.  <Component key=value/>

  // Conditional Rendering: allows u to control what gets rendered in ur applcation based on certain conditions(show, hide or change components)

  // Click event: an interaction when a user clicks on a specific element. We can respond to clicks by passing a callback to the onClick event handler.


  // State is used to store data that can change in a component. It is an object that stores some data that can change over time.

  
  // React Hook: Special function that allows functional components to use react feature without writing class components. (useState, useEffect, useReducer, useContext, useCallback and more...)

  // useState: a react hook that allows the creation of a stateful variable and a setter function to update its value in the virtual DOM.




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
    </>
  );
}

export default App
