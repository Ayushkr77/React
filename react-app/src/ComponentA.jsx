import { useState } from "react"
import ComponentB from "./ComponentB"
import { createContext } from "react";


export const UserContext=createContext();

export default function ComponentA() {
    
    const [user, setUser]=useState("Ayush");
    
    // We are making componentA box inside it B, inside it C, inside it D. And we want to access user from D. So we are using useContext and not prop drilling.
    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2> {/* If we want to display username say Bye {user} in component D, we have to pass it as props to componentB, then to C, then to componentD. This is called prop drilling. Try this also. There's a better solution useContext hook */}
            {/* <ComponentB /> */}


            {/* using useConext */}
            <UserContext.Provider value={user}>  {/* This is the provider component created from createContext(). It wraps any components that need access to the shared data (context).    value={user} This is the actual data you're sharing via context.*/}
                <ComponentB /> {/* here it can be any component C,D... we want B inside A thats whyB here */}
            </UserContext.Provider>
        </div>
    )
}