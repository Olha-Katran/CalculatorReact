import React, { useState } from 'react';
import './App.css';
import Calculator from "./Components/Calculator";

const  App = () => {
      const [currentValue, setCurrentValue] = useState("");
      const [historyValue, setHistoryValue] = useState("");

      const operator = ['/', '*', '-', '+', '.'];
      const brackets = ['(', ')'];


      const updateCalc = (value) => {
            if(
                operator.includes(value) && currentValue === '' ||
                operator.includes(value) && operator.includes(currentValue.slice(-1))
            ) {
                  return;
            } else if  (
                brackets.includes(value) &&
                brackets.includes(currentValue.slice(-1))
            ){
                  return;
            }
            setCurrentValue(currentValue + value);


      }

      const negativeButton = () => {

            if (currentValue > 0) {
                  setCurrentValue(`-${currentValue}`)
            } else {
                  const positiveNumber = currentValue.slice(1);
                  setCurrentValue(positiveNumber);
            }
      }

      const handleAllClear = () => {
            setCurrentValue("");
            setHistoryValue("");
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
              clearButton={clearButton}
              handleClear={handleAllClear}
              negativeButton={negativeButton}
          />
      )
}

export default App;
