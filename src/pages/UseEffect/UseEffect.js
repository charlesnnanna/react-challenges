import React, { useEffect, useState } from 'react';

function UseEffect(props) {
    const [count, setCount] = useState(0)
    const [calculate, setCalculate] = useState(0)

    useEffect(() => {
        
        setCalculate(() => count * 2)

    },[count])
    return (
        <div>
            <h1>It has rendered {count} times</h1>
            <p>{calculate}</p>
            <button onClick = {() => {setCount(c => c + 1)}}>Calculate</button>
        </div>
    );
}

export default UseEffect;