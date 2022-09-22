import React, { useState } from "react";
import Calculate from "./Calculator/Func";
import "./css/Calculator.css";
const Calculator = () => {
  const [calc, setCalc] = useState(0);
  const [number, setNumber] = useState(0);
  const [signe, setSigne] = useState("+");
  let board = [];
  let keys = ["AC", "+/-", "%", "/", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "=",];
  const passClick = (chr) => {
    if (calc < 999999999) {
      switch (chr) {
        case 0:
          if (calc !== 0) setCalc(calc + "" + 0);
          break;
        case 1:
          if (calc !== 0) {
            setCalc(calc + "" + 1);
          } else {
            setCalc(1);
          }
          break;
        case 2:
          if (calc !== 0) {
            setCalc(calc + "" + 2);
          } else {
            setCalc(2);
          }
          break;
        case 3:
          if (calc !== 0) {
            setCalc(calc + "" + 3);
          } else {
            setCalc(3);
          }
          break;
        case 4:
          if (calc !== 0) {
            setCalc(calc + "" + 4);
          } else {
            setCalc(4);
          }
          break;
        case 5:
          if (calc !== 0) {
            setCalc(calc + "" + 5);
          } else {
            setCalc(5);
          }
          break;
        case 6:
          if (calc !== 0) {
            setCalc(calc + "" + 6);
          } else {
            setCalc(6);
          }
          break;
        case 7:
          if (calc !== 0) {
            setCalc(calc + "" + 7);
          } else {
            setCalc(7);
          }
          break;
        case 8:
          if (calc !== 0) {
            setCalc(calc + "" + 8);
          } else {
            setCalc(8);
          }
          break;
        case 9:
          if (calc !== 0) {
            setCalc(calc + "" + 9);
          } else {
            setCalc(9);
          }
          break;
        case ".":
          setCalc(calc + ".");
          break;
        default:
          break;
      }
    }
    switch (chr) {
      case "+/-":
        setCalc(parseFloat(calc));
        setCalc(-calc);
        break;
      case "-":
        setSigne("-");
        setNumber(parseFloat(calc));
        setCalc("");
        break;
      case "+":
        setSigne("+");
        setNumber(parseFloat(calc));
        setCalc("");
        break;
      case "x":
        setSigne("x");
        setNumber(parseFloat(calc));
        setCalc("");
        break;
      case "/":
        setSigne("/");
        setNumber(parseFloat(calc));
        setCalc("");
        break;
      case "%":
        setSigne("%");
        setNumber(parseFloat(calc));
        setCalc("");
        break;
      case "=":
        setCalc(Calculate(calc, number, signe));
        setNumber(0);
        break;
      default:
        break;
    }
    if (chr === "AC") {
      setCalc(0);
      setSigne("+");
      setNumber(0);
    }
    document.getElementById("led").focus();
  };
  for (let i = 0; i < 19; i++) {
    if (i === 16)
      board.push(
        <button
          key={i}
          className="key grid-span"
          onClick={() => {
            passClick(keys[i]);
          }}
        >
          {keys[i]}
        </button>
      );
    else
      board.push(
        <button
          key={i}
          className="key"
          onClick={() => {
            passClick(keys[i]);
          }}
        >
          {keys[i]}
        </button>
      );
  }
  return (
    <div className="calculator" style={{ marginTop: "50px" }}>
      <input
        type="text"
        maxLength={10}
        id="led"
        value={calc}
        onChange={(e) => {
          setCalc(e.target.value);
        }}
      />
      {board}
    </div>
  );
}
export default Calculator
