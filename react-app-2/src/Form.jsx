// Difference between html form and react form, what are controlled and uncontrolled components. Must see below video
// https://www.youtube.com/watch?v=uXwFVf1A9ak&list=PLp18NAIKHWnvpLpioGs6ZAiMlpfx49KOz&index=16&t=90s&ab_channel=YoshitaJain

// Controlled Component: In a controlled component, React state controls the form input element.   Features: Uses useState or another state hook, React is the "single source of truth", Allows easy validation, conditional rendering, etc.
// Uncontrolled Component: In an uncontrolled component, the DOM itself maintains the form input’s state. You access the value only when needed using a ref.     Features: Uses useRef, Less React involvement, Good for simple or one-time access (e.g., on submit)

import { useState } from "react";

export default function Form() {

    const [name, setName] = useState("Ayush");
    const [pswd, setPswd] = useState("");

    // Handling multiple input fields with controlled component. We are not making different functions for each input field like name, password, email,...
    function handleChange(e) {
        console.log(e.target.name);
        if(e.target.name==="firstName") {
            setName((e.target.value).toUpperCase());
        }
        else {
            setPswd(e.target.value);
        }
    }

    return (
        <>
            <form>
                <label>Name</label>
                <input type="text" name="firstName" value={name} onChange={handleChange}/>
                <br/>
                <label>Password</label>
                <input type="text" name="password" value={pswd} onChange={handleChange}/>
            </form>
        </>
    )
}