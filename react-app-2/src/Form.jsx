// Difference between html form and react form, controlled and uncontrolled components. Must see below video
// https://www.youtube.com/watch?v=uXwFVf1A9ak&list=PLp18NAIKHWnvpLpioGs6ZAiMlpfx49KOz&index=16&t=90s&ab_channel=YoshitaJain

import { useState } from "react";

export default function Form() {

    const [name, setName] = useState("");
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