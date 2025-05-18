import { useMemo, useState } from "react";

export default function MemoHook() {
    
    const [add, setAdd]=useState(0);
    const [minus, setMinus] = useState(100);

    // here this function is re rendered even if we click on subtract button which has no linkage with this multiply function. It is understood that if we click add button, then add is getting updated and since here it is add*100, so it will be re rendered. But it is rendering with subtract click also. So we will use useMemo hook
    // const multiply=()=> {
    //     console.log("Multiply function");
    //     return add*100;
    // }

    
    // useMemo
    // const multiplication = useMemo(() =>  {
    //     console.log("Multiply function");
    //     return add*100;
    // },[add])  // will only be rendered when add value changes
    // OR
    const multiplication = useMemo(function multiply() {
        console.log("Multiply function");
        return add * 100;
    }, [add]);



    return (
        <div>
            <h1>UseMemo</h1>
            <p>Multiply: {multiplication}</p>
            <p>{add}</p>
            <button onClick={()=>setAdd(a=>a+1)}>Add</button>
            <p>{minus}</p>
            <button onClick={()=>setMinus(a=>a-1)}>Subtract</button>
        </div>
    )
}