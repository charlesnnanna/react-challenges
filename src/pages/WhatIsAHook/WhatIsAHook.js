import React, {useState} from 'react';

function WhatIsAHook(props) {
    const [color, setColor] = useState("red");
    const [car, setCar] = useState({
        model : "1954",
        brand : "Toyota",
        color : "Color"
    })

    function changeCar (){
        setCar(prevState => {
            return {...prevState, color: color}
        })
    }

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>

      <div>
        <p>My car brand is {car.brand}, {car.model} Model. It's color is {car.color}</p>
        <button onClick={changeCar}>changeCar</button>
      </div>
    </>
  );
}

export default WhatIsAHook;