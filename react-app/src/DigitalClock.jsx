import { useEffect, useState } from "react";

export default function DigitalClock() {

    // Refer index.css for styling
    
    const [time, setTime] = useState(new Date());

    // below code is working without useEffect also. Find out why it is correct to use useEffect. Also find out when to use and when not to use
    useEffect(()=> {
        const intervalId = setInterval(()=> {
            setTime(new Date());
        }, 1000);

        return ()=> {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem= hours>=12?"PM":"AM";
        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(num) {  // there is inbuilt method also  num.toString().padStart(2, '0')
        return (num<10?"0":"")+num;
    }


    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}  