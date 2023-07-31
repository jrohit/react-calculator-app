import React, { useState } from "react";
import InputBox from "../inputBox";

import Buttons from "../buttons";
import OperativeButtons from "../buttons/opertiveButtons";
import {
  ADDITION,
  DIVISION,
  EQUAL,
  MULTIPLICATION,
  PERCENTANGE,
  SQUARE_ROOT,
  SUBTRACTION,
} from "../../lib/helpers";

const Calculator = () => {
  const [numberValue, setNumberValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [operatee, setOperatee] = useState("");
  const [operation, setOperation] = useState("");

  const parseFloatNumber = (finaleValue, inputValue) => {
    let [num, float] = numberValue.split(".");
    if (float !== undefined) {
      finaleValue = [
        num,
        float.length >= 2
          ? float.substring(0, float.length - 1) + inputValue
          : float + inputValue,
      ].join(".");
    } else {
      finaleValue = num + "" + inputValue;
    }
    return finaleValue;
  };

  const handleNumericSelection = (inputValue) => {
    let finaleValue = "";
    if (typeof inputValue === "string") {
      if (inputValue.length > 0) {
        finaleValue = parseFloatNumber(finaleValue, inputValue);
      } else {
        finaleValue = "";
        setOperatee("");
        setOutputValue("");
      }
    } else {
      finaleValue = parseFloatNumber(finaleValue, inputValue);
    }

    setNumberValue(finaleValue);
  };

  const deleteNumber = () => {
    setNumberValue(numberValue.substring(0, numberValue.length - 1));
  };

  const performOperation = (operator) => {
    switch (operator) {
      case ADDITION:
        return parseFloat(numberValue) + parseFloat(operatee);
      case SUBTRACTION:
        return parseFloat(operatee) - parseFloat(numberValue);
      case MULTIPLICATION:
        return parseFloat(numberValue) * parseFloat(operatee);
      case DIVISION:
        return parseFloat(operatee) / parseFloat(numberValue);
      case PERCENTANGE:
        return parseFloat(operatee / 100) * parseFloat(numberValue);
      case SQUARE_ROOT:
        return Math.sqrt(parseFloat(numberValue));
      default:
        return "";
    }
  };

  const handleOperativeButtonClick = (operator) => {
    if (numberValue) {
      if (
        operation !== "" &&
        operation !== EQUAL &&
        operation !== SQUARE_ROOT
      ) {
        const result = performOperation(operation);
        setOutputValue(result.toString());
        setOperatee(result.toString());
        setNumberValue("");
        setOperation(operator);
      } else {
        setOperation(operator);
        if (numberValue && operator === EQUAL) {
          const result = performOperation(operation);
          setOutputValue(result.toString());
          setOperatee(result.toString());
          setNumberValue(result.toString());
        } else if (operator === SQUARE_ROOT) {
          const result = performOperation(operator);
          setNumberValue(result.toString());
        } else {
          if (operatee) {
            const result = performOperation(operator);
            setOutputValue(result.toString());
            setOperatee(result.toString());
            setNumberValue(result.toString());
          } else {
            setOperatee(numberValue);
            setNumberValue("");
          }
        }
      }
    }
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 h-auto border-black border-2">
          <div className="flex float-left font-semibold text-2xl justify-start items-center">
            {outputValue && outputValue.substring(0, 6)}
          </div>
          <InputBox
            onNumbersClicked={handleNumericSelection}
            onOperativeButtonClicked={handleOperativeButtonClick}
            numberValue={numberValue}
            deleteNumber={deleteNumber}
          />
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 md:flex-initial md:w-1/2 lg:w-2/3 xl:w-3/4 xl:border-r-2 lg:border-r-2 mr-1 ">
              <Buttons onNumbersClicked={handleNumericSelection} />
            </div>
            <div className="flex-1 md:flex-initial md:w-1/2 lg:w-2/3 xl:w-3/4">
              <OperativeButtons
                onOperativeButtonClicked={handleOperativeButtonClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
