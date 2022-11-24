import React from "react";
import '../style.css'


export default function Square ({value, onClick}) {
      return (
        <>
            <button className="square" onClick = {onClick}>
                {value}
             </button>
        </>
        
      );
    
  }