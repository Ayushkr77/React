import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";

function App() {

  // props: read-only components that are shared between components. a parent component can send data to a child component.  <Component key=value/>

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
    </>
  );
}

export default App
