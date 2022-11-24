import React from 'react';
import '../PrimostarDropdown.css';

function Option({name, click}) {
    return (
        <div className='option' onClick = {click}>
            <input type = 'radio' className = 'radio'/>
            <label>{name}</label>
         </div>
    );
}

export default Option;