import React, { Component } from 'react';
import Component2 from './Component2';

function Component1() {
    return (
        <div>
            <h1>This is the new Component</h1>
            <Component2/>
        </div>
    );
}

export default Component1;