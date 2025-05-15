import React, {useState} from "react";

export default function MyComponent() {
    const [name, setName]=useState();
    const [age, setAge]=useState(0);
    const [isEmployed, setIsEmployed]=useState(false);
    const [country, setCountry] = useState("");
    const [userState, setUserState] = useState("Jharkhand"); 

    const updateName=()=>{
        setName("Ayush");
    }
    const incrementAge=()=>{
        setAge(age+2);
    }
    const toggleEmployee=()=>{
        setIsEmployed(!isEmployed);
    }
    const updateCountry = (newCountry) => {
        setCountry(newCountry); // Set country dynamically via parameter
    };
    const handleStateChange = (e) => {
        setUserState(e.target.value); // Update state from input
    };


    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed?"Yes":"No"}</p>
            <button onClick={toggleEmployee}>Toggle status</button>

            <p>Country: {country}</p>
            <button onClick={() => updateCountry("India")}>Set Country</button>

            <p>State you live in: {userState}</p>
            <input
                type="text"
                placeholder="Enter your state"
                value={userState}
                onChange={handleStateChange}
            />
        </div>
    )
}