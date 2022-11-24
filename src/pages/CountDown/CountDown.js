import React, { useEffect, useState } from 'react';

function CountDown(props) {
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')
    const [onTimer, setOnTimer] = useState(false)
   // const [timer, setTimer] = useState('')


    useEffect(() => {
    if(typeof(seconds) === 'number') {
        var counter = setTimeout(() => {
            const timer = new Date().setMinutes(minutes, seconds)
            //const countDown = timer - now
            const minute = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
            const second = Math.floor((timer % (1000 * 60)) / 1000)
            console.log(`${minute} : ${second}`)
            setOnTimer(`${minute} : ${second}`)
            setSeconds(seconds => seconds - 1)
          },1000)
    }
     
    }, [seconds])

    function handlesMinutes (e) {
        setMinutes(e.target.value)
    }

    function handleSeconds (e) {
        setSeconds(e.target.value)
    }

    function startTimer (){
        setSeconds(seconds => seconds-1)
        
    }

    function resetTimer (){
        setOnTimer(false)
        
    }

    function reduceTime(){
        
    }

    return (
        <div>
            <input type = "text" name = "minutes" placeholder= {minutes}  onChange ={handlesMinutes}/>
            <input type = "text" name = "seconds" placeholder = {seconds}   onChange = {handleSeconds}/>
            <button onClick={() => {startTimer()}}>Start Timer</button>
            <button onClick={() => {resetTimer()}}>Reset Timer</button>
            <button onClick={() => {reduceTime()}}>Reduce Timer</button>
            <h1>{`${onTimer}`}</h1>
        </div>
    );
}

export default CountDown;