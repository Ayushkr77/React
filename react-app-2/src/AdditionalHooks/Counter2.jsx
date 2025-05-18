import { useCallback, useState } from "react";
import ChildA from "./ChildA";  // dont forget to see that we are exporting default memo(ChildA) in ChildA.jsx

export default function Counter2() {
    const [cnt, setCnt]=useState(0);
    const [cnt2, setCnt2]=useState(0);

    // This learning function is recreated on every render of Counter2.So even if nothing inside <ChildA /> changes, React thinks its props changed because the learning function is now a new reference. That’s why <ChildA /> re-renders when Counter2 does — even if the function does the same thing. Even if we just click the add button, ChildA also gets re rendered
    // const learning=()=> {
    //     console.log("Random");
    // }


    // useCallback to memoize the function
    const learning = useCallback(() => {
        console.log("Random");
    }, [cnt2]);  // if cnt2 will change then only child component will get rendered

    return (
        <div>
            <h1>Callback</h1>

            <ChildA learning={learning} />
            <p>Count: {cnt}</p>
            <button onClick={()=>setCnt(c=>c+1)}>Add</button>
            <p>Count2: {cnt2}</p>
            <button onClick={()=>setCnt2(c=>c+2)}>Add</button>
        </div>
    )
}