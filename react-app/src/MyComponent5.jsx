import { useEffect, useState } from "react";

export default function MyComponent5() {

    const [count, setCount]=useState(0);
    const [color, setColor]=useState("green");

    // useEffect(()=> { // runs on every re-render
    //     document.title= `Count: ${count}`;
    // })

    // useEffect(()=> { // runs once after 1st render
    //     document.title= `Count: ${count}`;
    // },[])

    useEffect(()=> {
        document.title= `Count: ${count} ${color}`;
    },[count]) // only runs when count changes, not when color changes. If u want then add color in dependency array as well [count, color]



    function addCnt() {
        setCount(c=>c+1);
    }
    function subCnt() {
        setCount(c=>c-1);
    }
    function changeColor() {
        setColor(c=>c==="green"?"red":"green");
    }


    return (
        <>
            <p style={{backgroundColor: color}}>Count: {count} Color: {color}</p>
            <button onClick={addCnt}>Add</button>
            <button onClick={subCnt}>Subtract</button>
            <button onClick={changeColor}>Change color</button>
        </>
    )
}