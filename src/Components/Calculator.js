import React from 'react';
import '../App.css';
import Display from './Display';
import Buttons from './Buttons';

const Calculator = (props) => {
    return (
        <div className="Calculator">
            <div className="App">
                <Display
                    calc={props.calc}
                    history={props.history}
                />

                <Buttons
                    handleClick={props.handleClick}
                    clearButton={props.clearButton}
                    handleEqual={props.handleEqual}
                />
            </div>
        </div>
    );
}

export default Calculator;