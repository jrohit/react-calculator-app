import React from "react";
import {
  TbSquareRoundedNumber0Filled,
  TbSquareRoundedNumber1Filled,
  TbSquareRoundedNumber2Filled,
  TbSquareRoundedNumber3Filled,
  TbSquareRoundedNumber4Filled,
  TbSquareRoundedNumber5Filled,
  TbSquareRoundedNumber6Filled,
  TbSquareRoundedNumber7Filled,
  TbSquareRoundedNumber8Filled,
  TbSquareRoundedNumber9Filled,
  TbSquareRoundedLetterC,
} from "react-icons/tb";
import { RxDotFilled } from "react-icons/rx";

const Buttons = ({ onNumbersClicked }) => {
  return (
    <>
      <div className="grid grid-cols-3 mx-auto gap-x-16 gap-y-10 p-4">
        <div
          className="cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onNumbersClicked(1);
          }}
        >
          <TbSquareRoundedNumber1Filled size={35} />
        </div>
        <div
          className="cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onNumbersClicked(2);
          }}
        >
          <TbSquareRoundedNumber2Filled size={35} />
        </div>
        <div
          className=" cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onNumbersClicked(3);
          }}
        >
          <TbSquareRoundedNumber3Filled size={35} />
        </div>
        <div
          className="cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onNumbersClicked(4);
          }}
        >
          <TbSquareRoundedNumber4Filled size={35} />
        </div>
        <div
          className="cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onNumbersClicked(5);
          }}
        >
          <TbSquareRoundedNumber5Filled size={35} />
        </div>
        <div
          className=" cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onNumbersClicked(6);
          }}
        >
          <TbSquareRoundedNumber6Filled size={35} />
        </div>
        <div
          className="cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onNumbersClicked(7);
          }}
        >
          <TbSquareRoundedNumber7Filled size={35} />
        </div>
        <div
          className=" cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onNumbersClicked(8);
          }}
        >
          <TbSquareRoundedNumber8Filled size={35} />
        </div>
        <div
          className=" cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onNumbersClicked(9);
          }}
        >
          <TbSquareRoundedNumber9Filled size={35} />
        </div>
        <div
          className=" cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onNumbersClicked(0);
          }}
        >
          <TbSquareRoundedNumber0Filled size={35} />
        </div>
        <div
          className=" cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onNumbersClicked(".");
          }}
        >
          <RxDotFilled size={35} />
        </div>
        <div
          className=" cursor-pointer w-fit rounded-lg"
          onClick={() => {
            onNumbersClicked("");
          }}
        >
          <TbSquareRoundedLetterC size={35} />
        </div>
      </div>
    </>
  );
};

export default Buttons;
