import ComponentC from "./ComponentC"
import { UserContext } from "./ComponentA"
import { useContext } from "react"

export default function ComponentB() { 

    const user = useContext(UserContext)

    return (
        <div className="box">
            <h1>Component B</h1>
            <h2>{`Hello ${user} from component B`}</h2>
            <ComponentC />
        </div>
    )
}