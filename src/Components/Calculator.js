import React from 'react';
import '../App.css';
import Display from './Display';

const Calculator = (props) => {
    const createNumberPad = () => {
        const numberPad = [];
        for (let i = 1; i<10; i++ ) {
            numberPad.push(
                <button
                    onClick={() => props.handleClick(i.toString())}
                    key={i}>{i}
                </button>)
        }
        return numberPad;
    }

    return (
        <div className="Calculator">
            <div className="App">
                <Display
                    calc={props.calc}
                    history={props.history}
                />

                <div className="operators">
                    <button onClick={ () => props.handleClick("/") }><i className="fa-solid fa-divide"></i></button>
                    <button onClick={ () => props.handleClick("*") }><i className="fa-solid fa-xmark"></i></button>
                    <button onClick={ () => props.handleClick("-") }><i className="fa-solid fa-minus"></i></button>
                    <button onClick={ () => props.handleClick("+") }><i className="fa-solid fa-plus"></i></button>
                    <button onClick={props.clearButton} ><i className="fa-solid fa-c"></i></button>
                </div   >

                <div className="digits">
                    { createNumberPad() }
                    <button
                        onClick={ () => props.handleClick("0") }
                        className="zero">0
                    </button>

                    <button
                        onClick={ () => props.handleClick(".") }
                        className="period">.
                    </button>

                    <button
                        onClick={ () => props.handleEqual("")}
                        className="equal">
                        <i className="fa-solid fa-equals"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;