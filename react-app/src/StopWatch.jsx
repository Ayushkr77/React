import { useEffect, useRef, useState } from "react";

export default function Stopwatch() {
    
    const [isRunning, setIsRunning] = useState(false);  // Boolean to know if stopwatch is running.
    const [elapsedTime, setElapsedTime] = useState(0);  // Tracks how much time has passed in milliseconds.
    const intervalIdRef = useRef(null);   // Stores the interval ID so we can clear it later.
    const startTimeRef= useRef(0);   // Stores the timestamp when the stopwatch started/resumed.


    useEffect(()=> {  // When isRunning becomes true, a 10ms interval starts. It calculates elapsedTime by subtracting the start time from Date.now(). On cleanup (or if isRunning becomes false), the interval is cleared.
        if(isRunning) {
            intervalIdRef.current=setInterval(()=> {
                setElapsedTime(Date.now()-startTimeRef.current);
            },10);
        }

        return ()=> {
            clearInterval(intervalIdRef.current);
        }
    },[isRunning])

    function start() {  // Sets the stopwatch as running. Sets the startTimeRef to account for already elapsed time if it's a resume.
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;  // Why this??  Let’s say you had already run the timer for 5 seconds before stopping. Now you resume the timer. You want it to continue from 5 seconds, not restart from 0. This formula shifts the current time back by already elapsed time. So now when Date.now() - startTimeRef.current is calculated, it continues smoothly from where it stopped.
    }

    function stop() {  // Just stops the stopwatch — useEffect clears the interval.
        setIsRunning(false);
    }

    function reset() { // Resets the stopwatch to zero and stops it.
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        let hrs=Math.floor(elapsedTime/(1000*60*60));
        let mins=Math.floor(elapsedTime/(1000*60)%60);
        let secs=Math.floor(elapsedTime/(1000)%60);
        let milisec=Math.floor((elapsedTime%1000)/10);

        hrs=String(hrs).padStart(2,"0");
        mins=String(mins).padStart(2,"0");
        secs=String(secs).padStart(2,"0");
        milisec=String(milisec).padStart(2,"0");

        return `${mins}:${secs}.${milisec}`;
    }



    return (
        <div>
            <div>{formatTime()}</div>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}