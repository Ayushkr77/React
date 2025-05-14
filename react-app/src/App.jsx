import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";

function App() {

  // props: read-only components that are shared between components. a parent component can send data to a child component.  <Component key=value/>

  return (
    <>
      <Header/> {/* Basics*/}
      <Food />  {/* Basics*/}
      <Card />  {/* Basics*/}
      <Button />  {/* For learning css*/}
      <Footer/>   {/* Basics*/}
    </>
  );
}

export default App
