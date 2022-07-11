import React, {useState} from 'react';
import '../App.css';
import Display from './Display';
import Buttons from './Buttons';


const Calculator = (props) => {
    const [open,setOpen]=useState(false)

    return (
        <div className="Calculator">
            <div className="App">
                <Display
                    calc={props.calc}
                    history={props.history}
                    setOpen={setOpen}
                    open={open}
                />

                <Buttons
                    handleClick={props.handleClick}
                    clearButton={props.clearButton}
                    handleEqual={props.handleEqual}
                    open={open}
                    handleClear={props.handleClear}
                    negativeButton={props.negativeButton}
                />
            </div>
        </div>
    );
}

export default Calculator;