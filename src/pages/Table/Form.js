import React, { useRef } from 'react';

function Form(props) {
    const name = useRef('')
    const occupation = useRef('')

    function handleName (e) {
        name.current = e.target.value
        console.log(name.current)
    }

    function handleOccupation (e) {
        occupation.current = e.target.value
        console.log(occupation.current)
    }



    
    return (
        <>
            <form>
                <label htmlFor='name'>Name</label>
                <input type="text" className='border border-black' name='name' onChange={handleName}/>

                <label htmlFor='occupation'>Occupation</label>
                <input type="text" className='border border-black' name='occupation' onChange={handleOccupation}/>
                <button onClick={(e) => {props.addPerson(e, name.current, occupation.current)}}>Submit</button>
            </form>

        </>
    );
}

export default Form;