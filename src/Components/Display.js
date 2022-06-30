import React from 'react';
import '../App.css';

const Display = (props) => {
    return (
        <div className="display">
            <span className="history">{props.history || "0"}</span>
            <br />
            <span>{props.calc || "0"}</span>
        </div>
    )
}

export default Display;