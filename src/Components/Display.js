import React from 'react';
import '../App.css';

const Display = (props) => {
    return (
        <div className="calculator-display">
            <div className="display">
                <span className="history">{props.history || "0"}</span>
                <br />
                <span>{props.calc || "0"}</span>
                <button
                    className="expand-button transition"
                    onClick={() => props.setOpen(!props.open)}><i className="fa-solid fa-angles-down"></i></button>
            </div>
        </div>

    )
}

export default Display;