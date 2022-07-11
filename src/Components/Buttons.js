import React from 'react';
import '../App.css';
import { motion} from 'framer-motion'

const Buttons = (props) => {
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
        <motion.div>
            {
                props.open ?
                    <motion.div layoutId="expandable-card">
                    {/*<div>*/}
                        <div className="operators">
                            <button onClick={ () => props.handleClick("/") }><i className="fa-solid fa-divide"></i></button>
                            <button onClick={ () => props.handleClick("*") }><i className="fa-solid fa-xmark"></i></button>
                            <button onClick={ () => props.handleClick("-") }><i className="fa-solid fa-minus"></i></button>
                            <button onClick={ () => props.handleClick("+") }><i className="fa-solid fa-plus"></i></button>
                            <button onClick={props.clearButton} ><i className="fa-solid fa-c"></i></button>
                        </div>

                        <div className="operators hidden">
                            <button
                                onClick={props.negativeButton}><i className="fa-solid fa-plus-minus"></i></button>
                            <button
                                className="solidSymbol"
                                onClick={ () => props.handleClick("(") }>(
                            </button>
                            <button
                                className="solidSymbol"
                                onClick={ () => props.handleClick(")") }>)
                            </button>
                            <button onClick={props.handleClear}>
                                <i className="fa-solid fa-a"></i>
                                <i className="fa-solid fa-c"></i>
                                </button>
                        </div>
                    {/*</div>*/}
                    </motion.div>
                     :
                    <motion.div layoutId="expandable-card">
                        <div className="operators">
                            <button onClick={ () => props.handleClick("/") }><i className="fa-solid fa-divide"></i></button>
                            <button onClick={ () => props.handleClick("*") }><i className="fa-solid fa-xmark"></i></button>
                            <button onClick={ () => props.handleClick("-") }><i className="fa-solid fa-minus"></i></button>
                            <button onClick={ () => props.handleClick("+") }><i className="fa-solid fa-plus"></i></button>
                            <button onClick={props.clearButton} ><i className="fa-solid fa-c"></i></button>
                        </div>
                    </motion.div>
            }

            <div className="digits">
                { createNumberPad() }
                <button
                    onClick={ () => props.handleClick("0") }
                    className="zero">0
                </button>

                <button
                    onClick={ () => props.handleClick(".") }
                    className="solidSymbol">.
                </button>

                <button
                    onClick={ () => props.handleEqual("")}
                    className="equal">
                    <i className="fa-solid fa-equals"></i>
                </button>
            </div>
        </motion.div>
    )
}

export default Buttons;