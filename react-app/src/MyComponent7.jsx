import { useEffect, useRef, useState } from "react";

export default function MyComponent7() {

    // let [number, setNumber]=useState(0);

    // useEffect(()=> {
    //     console.log("Component rendered");
    // })

    // function handleClick() {
    //     setNumber(n=>n+1);
    //     console.log(number);
    // }



    // Same above thing is done using useRef instead of useState, the difference is the below code i.e., useRef does not triggers re-renders.
    // useRef returns a ref object with a single current property initially set to the initial value you provided. we are also printing ref in the console which has a property current

    const ref=useRef(0);
    const inputRef= useRef(null);

    console.log(ref);
    console.log(inputRef);

    useEffect(()=> {
        console.log("Component rendered");
    })

    function handleClick() {
        ref.current=ref.current+1;  // or ref.current++
        console.log(ref.current);

        inputRef.current.focus();
        inputRef.current.style.backgroundColor="yellow";
    }


    return (
        <>
            <button onClick={handleClick}>
                Click me
            </button>
            <input type="text" ref={inputRef} />
        </>
    )
}