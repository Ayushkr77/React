import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx"; // For learning css

import Student from "./Student.jsx";  // For learning props

import UserGreeting from "./UserGreeting.jsx"; // For learning conditional rendering

import List from "./List.jsx";  // For learning render lists



function App() {

  // props: read-only components that are shared between components. a parent component can send data to a child component.  <Component key=value/>

  // Conditional Rendering: allows u to control what gets rendered in ur applcation based on certain conditions(show, hide or change components)

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
    </>
  );
}

export default App
