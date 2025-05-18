import { useState } from "react";

// Custom Hook.   We can also make this in another file and import it here
function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);  // or we can also remove the parameter initialValue and use the useState() function directly like useState(0)

    const increase = () => {
        setCount(c => c + 1);
    };

    // return [count, increase]; // here we are returning an array but it is good to return an object

    return {   // or return {count, increase}
        count: count, 
        increase: increase 
    };
}




// Component using the custom hook
export default function Counter() {

    // const [count, increaseCnt] = useCounter();
    const { count, increase } = useCounter();

    return (
        <div>
            <button onClick={increase}>Increase: {count}</button>
        </div>
    );
}
