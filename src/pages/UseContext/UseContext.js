import React, { createContext, useState } from 'react';
import Component1 from './components/Component1';

export const ModeContext = createContext()
function UseContext(props) {

    const [mode, setMode] = useState('light')
    return (
        <ModeContext.Provider value={mode}>
            <h1>The current Mode is {mode}</h1>
            <Component1 mode = {mode}/>
        </ModeContext.Provider>
    );
}

export default UseContext;
