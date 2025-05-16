import { useContext } from "react";
import { UserContext } from "./ComponentA"

// ComponentD is a consumer componenent and ComponentA is provider component

export default function ComponentD() { 

    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )
}