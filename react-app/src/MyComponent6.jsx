import { useEffect, useState } from "react";

export default function MyComponent6() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // We have to use useEffect bcz then only handleResize will get called. Without this, the state update function (handleResize) is never triggered
    useEffect(()=> {
        window.addEventListener("resize", handleResize);  // eventListener takes 3 parameters.  target.addEventListener(type, listener, options);   type (required) A string representing the type of event to listen for. Example: "click", "resize", "keydown", "scroll", etc.   listener (required) A function to call whenever the specified event occurs. Example: function handleClick() { ... } or an arrow function: () => { ... }     and 3rd parameter is optional
        console.log("Event listener added");

        // return inside useEffect must return a function — and that function is the cleanup function. Why do we need a cleanup function? Prevent memory leaks (e.g., remove event listeners, stop timers, cancel network requests).     Avoid duplicate logic (e.g., if you set up something every time dependencies change, you should clean it up first)
        return ()=> { // Clean up the event listener on unmount
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed");
        }
    },[]) // we are using useEffect and empty array dependency bcz when we are resizing the window, thousands of event listeners are logged which we dont want

    useEffect(()=> { // we can also use useEffect() more than once
        document.title=`Size: ${width} x ${height}`;
    },[width, height]);
    
    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


    return (
        <>
            <p>Window Width: {width}</p>
            <p>Window Height: {height}</p>
        </>
    )
}