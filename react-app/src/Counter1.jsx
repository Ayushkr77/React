import { useState } from "react";

export default function Counter1() {
    const [count, setCount]=useState(0);

    // You might think this will increase the count by 3, since you're calling setCount(count + 1) three times. It will only increment the count by 1 — not 3. eact batches state updates for performance. All three setCount(count + 1) lines are using the same stale count value (from the first render), not the updated one. So if count = 0, each line evaluates count + 1 as 1
    // const increment=()=> {
    //     setCount(count+1);  
    //     setCount(count+1);  
    //     setCount(count+1);  
    // }

    // Use the functional form of setCount, which guarantees you’re working with the most up-to-date value
    const increment = () => {
        setCount(prev => prev + 1);  // can name the variable anything like c=>c+1
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
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