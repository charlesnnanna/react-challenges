import React, { useContext } from 'react';
import { ModeContext } from '../UseContext';

function Component2() {
    const mode = useContext(ModeContext)
    return (
        <div>
            <h1>The mode I want to use now is {mode}</h1>
        </div>
    );
}

export default Component2;