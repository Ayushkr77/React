import { useState } from "react";

export default function Counter() {
    const [count, setCount]=useState(0);
    const increment=()=> {
        setCount(count+1);  // count++ will not work. Why??
        // setCount(prevCount => prevCount + 1); // Best practice
    }
    const decrement=()=> {
        setCount(count-1);
    }
    const reset=()=> {
        setCount(0);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}