// Go through the code again and see workfloe and understand each line


import { useReducer } from "react";


const initialState=0;
const reducer=(state,action)=>{
    switch(action){
        case "Increment":
            return state+1;
        case "Decrement":
            return state-1;
        default:
            return state;
    } 
}


export default function Counter1() {

    const [count, dispatch]= useReducer(reducer, initialState);

    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={()=>dispatch("Increment")}>Increment</button>   {/* Its better practice to use  dispatch({ type: "Increment" });  and then above action.type in switch*/}
            <button onClick={()=>dispatch("Decrement")}>Decrement</button>
        </div>
    )
}