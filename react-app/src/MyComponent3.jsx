import { useState } from "react";

export default function MyComponent3() {
    const [food, setFood]=useState(["Apple","Banana","Orange"]);

    function addFood() {
        const newFood=document.getElementById("foodInput").value;  // we are not using e.target.value     Using e.target.value is typically used inside an onChange handler of an input element
        document.getElementById("foodInput").value="";  // clearing the input field

        // setFood([...food,newFood]);
        setFood((prevFood) => [...prevFood, newFood]);
    }

    function removeFood(index) {
        setFood(food.filter((_,i)=> i!==index)); // 1st parameter is element but since we are not using it here we are writing underscore _, using an underscore is a convention to indicate that parameter being passed to the function is being ignored
    }


    return (
        <>
            <h2>List of Food</h2>
            <ul>
                {food.map((item, index) => <li key={index} onClick={()=> removeFood(index)}>{item}</li>)}  {/* The first parameter is always the current element.The second parameter is always the index (or position). */}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food" />
            <button onClick={addFood}>Add Food</button>
        </>
    )
}