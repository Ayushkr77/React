import { useState } from "react";

export default function MyComponent4() {
    
    const [cars, setCars]=useState([]);
    const [carYear, setCarYear]=useState(new Date().getFullYear());
    const [carMake, setCarMake]=useState("");
    const [carModel, setCarModel]=useState("");

    function addCar() {
        const newCar= {
            year: carYear,
            make: carMake,
            model: carModel
        }
        setCars(c=> [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function removeCar(index) {
        setCars(c=> c.filter((_,i)=>i!==index));
    }
    function yearChange(e) {
        setCarYear(e.target.value);
    }
    function makeChange(e) {
        setCarMake(e.target.value);
    }
    function modelChange(e) {
        setCarModel(e.target.value);
    }



    return (
        <>
            <h2>List of Cars</h2>
            <ul>
                {cars.map((car,ind)=>
                    <li key={ind} onClick={()=>removeCar(ind)}>
                        {car.year} {car.make} {car.model}
                    </li>
                )}
            </ul>

            <input type="number" value={carYear} onChange={yearChange} />
            <br/>
            <input type="text" value={carMake} onChange={makeChange} placeholder="Enter car make"/>
            <br/>
            <input type="text" value={carModel} onChange={modelChange} placeholder="Enter car model"/>
            <br/>
            <button onClick={addCar}>Add Car</button>
        </>
    )
}