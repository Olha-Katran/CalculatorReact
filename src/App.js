import React, { useState } from 'react';
import './App.css';
import Calculator from "./Components/Calculator";

const  App = () => {
      const [currentValue, setCurrentValue] = useState("");
      const [historyValue, setHistoryValue] = useState("");

      const operator = ['/', '*', '-', '+', '.'];

      const updateCalc = (value) => {
            if(
                operator.includes(value) && currentValue === '' ||
                operator.includes(value) && operator.includes(currentValue.slice(-1))
            ) {
                  return;
            }
            setCurrentValue(currentValue + value);
      }

      const equalButton = (value) => {
            if(!operator.includes(value)) {
                  setHistoryValue(currentValue)
                  setCurrentValue(eval(currentValue + value).toString())
            }
      }

      const clearButton = () => {
            const value = currentValue.slice(0, -1);
            setCurrentValue(value);
      }

      return (
          <Calculator
              handleClick={updateCalc}
              calc={currentValue}
              handleEqual={equalButton}
              history={historyValue}
              clearButton={clearButton} />
      )
}

export default App;
