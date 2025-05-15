import { useState } from "react";

export default function MyComponent2() {

    const [car, setCar]=useState({
        year: 2025,
        company:"Mercedes",
        model:"Maybach"
    })

    function handleYearChange(e) {
        setCar(prevCar=>( {
            ...prevCar,
            year: e.target.value
        }))
    }

    function handleCompanyChange(e) {
        setCar(c=>( {
            ...c,
            company: e.target.value
        }))
    }

    function handleModelChange(e) {
        setCar(c=>( {
            ...c,
            model: e.target.value
        }))
    }



    return (
        <>  {/* a special React feature called a Fragment */}
            <p>My favourite car is: {car.company} {car.model} of {car.year}</p>
            <input type="number" value={car.year} onChange={handleYearChange} />
            <input type="text" value={car.company} onChange={handleCompanyChange} />
            <input type="text" value={car.model} onChange={handleModelChange} />
        </>
    )
}