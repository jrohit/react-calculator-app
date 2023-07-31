import React, { useEffect, useMemo } from "react";
import { FiDelete } from "react-icons/fi";
import {
  ADDITION,
  DIVISION,
  EQUAL,
  MULTIPLICATION,
  PERCENTANGE,
  SUBTRACTION,
} from "../../lib/helpers";

const InputBox = ({
  numberValue,
  deleteNumber,
  onNumbersClicked,
  onOperativeButtonClicked,
}) => {
  const opertionsMapping = useMemo(() => {
    return {
      "=": EQUAL,
      "-": SUBTRACTION,
      "+": ADDITION,
      "*": MULTIPLICATION,
      "/": DIVISION,
      "%": PERCENTANGE,
      Enter: EQUAL,
    };
  }, []);

  return (
    <>
      <div className="flex justify-end m-2">
        <input
          type="text"
          className="w-2/3 bg-gray-400 p-1 float-right flex justify-end"
          value={numberValue}
          readOnly
          onKeyDown={(e) => {
            if (("0" <= e.key && e.key <= "9") || e.key === ".") {
              onNumbersClicked(e.key);
            }
            if (e.key === "Backspace") {
              deleteNumber();
            }
            if (Object.keys(opertionsMapping).includes(e.key)) {
              onOperativeButtonClicked(opertionsMapping[e.key]);
            }
          }}
        />
        <FiDelete
          className="p-1 cursor-pointer"
          size={35}
          onClick={deleteNumber}
        />
      </div>
    </>
  );
};

export default InputBox;
