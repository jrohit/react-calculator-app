import React from "react";
import {
  TbSquareRoundedPlus,
  TbSquareRoundedMinus,
  TbSquareRoundedX,
  TbSquareForbid2,
  TbPercentage,
  TbSquareRoot,
  TbSquareRoundedLetterM,
} from "react-icons/tb";

import { CgMathEqual } from "react-icons/cg";
import {
  ADDITION,
  DIVISION,
  MULTIPLICATION,
  PERCENTANGE,
  SQUARE_ROOT,
  SUBTRACTION,
  MEMORY,
  EQUAL,
} from "../../lib/helpers";

const OperativeButtons = ({ onOperativeButtonClicked }) => {
  return (
    <>
      <div className="grid grid-cols-3 mx-auto gap-x-16 gap-y-10 p-4">
        <div
          className="cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onOperativeButtonClicked(ADDITION);
          }}
        >
          <TbSquareRoundedPlus size={35} />
        </div>
        <div
          className="cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onOperativeButtonClicked(SUBTRACTION);
          }}
        >
          <TbSquareRoundedMinus size={35} />
        </div>
        <div
          className="cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onOperativeButtonClicked(DIVISION);
          }}
        >
          <TbSquareForbid2 size={35} />
        </div>
        <div
          className="cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onOperativeButtonClicked(MULTIPLICATION);
          }}
        >
          <TbSquareRoundedX size={35} className="mx-auto" />
        </div>
        <div
          className="cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onOperativeButtonClicked(PERCENTANGE);
          }}
        >
          <TbPercentage size={35} className="mx-auto" />
        </div>
        <div
          className="cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onOperativeButtonClicked(SQUARE_ROOT);
          }}
        >
          <TbSquareRoot size={35} className="mx-auto" />
        </div>
        <div
          className="cursor-pointer col-span-2 flex justify-end rounded-lg"
          onClick={() => {
            onOperativeButtonClicked(MEMORY);
          }}
        >
          <TbSquareRoundedLetterM size={35} className="mx-auto" />
        </div>
        <div
          className="cursor-pointer rounded-lg "
          onClick={() => {
            onOperativeButtonClicked(EQUAL);
          }}
        >
          <CgMathEqual size={35} />
        </div>
      </div>
    </>
  );
};

export default OperativeButtons;
