import { useEffect, useState } from "react";
import { HiMiniBackspace } from "react-icons/hi2";
import { calculate } from "../hooks/calculate";

const buttonValues: (string | JSX.Element)[] = [
  "1",
  "2",
  "3",
  "x",
  "÷",
  "4",
  "5",
  "6",
  "+",
  "-",
  "7",
  "8",
  "9",
  "%",
  "^",
  ".",
  "0",
  <HiMiniBackspace size="36" data-key="backspace" />,
  "=",
];
export const Calculator: React.FC = () => {
  const [result, setResult] = useState<string>("0");
  const [keyPressed, setKeyPressed] = useState<string>("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const keyPressed = event.key;

    if (keyPressed === "Enter") {
      try {
        setResult(calculate(result));
      } catch (error) {
        setResult("Error: Cannot divide by zero");
      }
    } else if (keyPressed === "Backspace") {
      setResult((prevResult) => prevResult.slice(0, -1));
    } else if (
      !isNaN(Number(keyPressed)) ||
      "+-*".includes(keyPressed) ||
      keyPressed === "/" ||
      keyPressed === "^" ||
      keyPressed === "%"
    ) {
      setResult((prevResult) =>
        prevResult === "0" ? keyPressed : prevResult + keyPressed
      );
    }
  };

  const handleButtonClick = (value: string | JSX.Element) => {
    if (typeof value === "string") {
      if (value === "백스페이스") {
        setResult((prevResult) => prevResult.slice(0, -1));
      } else if (value === "X") {
        setResult((prevResult) => prevResult + "");
      } else if (value === "%") {
        setResult((prevResult) => {
          const parts = prevResult.split("%");
          if (parts.length === 2) {
            const dividend = parseFloat(parts[0]);
            const divisor = parseFloat(parts[1]);
            return (dividend % divisor).toString();
          } else {
            return prevResult + "%";
          }
        });
      } else if (value === "^") {
        setResult((prevResult) => {
          const parts = prevResult.split("^");
          if (parts.length === 2) {
            const base = parseFloat(parts[0]);
            const exponent = parseFloat(parts[1]);
            return Math.pow(base, exponent).toString();
          } else {
            return prevResult + "^";
          }
        });
      } else if (value === "÷") {
        setResult((prevResult) => prevResult + "/");
      } else {
        setResult((prevResult) => {
          if (["+", "-", "*", "/", "%", "^"].includes(value)) {
            return prevResult === "0" ? value : prevResult + value;
          }
          return prevResult === "0" ? value : prevResult + value;
        });
      }
    } else {
      const key = value.props["data-key"];
      if (value.props.alt === "Delete" || key === "backspace") {
        setResult((prevResult) => prevResult.slice(0, -1));
      }
    }
  };

  useEffect(() => {
    if (!isNaN(Number(keyPressed)) || "+-*÷%".includes(keyPressed)) {
      if (keyPressed === "=" || keyPressed === "Enter") {
        try {
          setResult(eval(result).toString());
        } catch (error) {
          setResult("Error: Cannot divide by zero");
        }
      } else {
        setResult((prevResult) =>
          prevResult === "0" ? keyPressed : prevResult + keyPressed
        );
      }
    }
    try {
      if (result.slice(-1) === "=") {
        setResult(eval(result.slice(0, -1)).toString());
      }
    } catch (error) {
      setResult("Error: Cannot divide by zero");
    }
  }, [keyPressed, result]);

  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="w-full px-6 py-6 sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-[400px] max-h-[367px] bg-primary px-">
        <div className="w-350 col-span-5 bg-primary-BLUE flex justify-end items-center rounded-3xl h-[70px] flex-end mb-6 px-8 shadow-lg ">
          <p
            className={`text-right ${
              result.startsWith("Error") ? "text-xl" : "text-3xl"
            } text-white`}
          >
            {result ? result : 0}
          </p>
        </div>
        <div className="grid grid-cols-5 grid-rows-4 gap-3.5 justify-items-center items-center">
          {buttonValues.map((value, index) => (
            <div
              key={index}
              className={`${
                typeof value === "string" &&
                ["x", "÷", "+", "-", "%", "^"].includes(value)
                  ? "bg-primary-ORANGE "
                  : value === "="
                  ? "bg-primary-GRAY text-black"
                  : "bg-primary-NAVY"
              } text-white flex justify-center items-center rounded-full shadow-lg py-2 ${
                typeof value === "string" &&
                ["x", "÷", "+", "-", "%", "^", "="].includes(value)
                  ? "px-4"
                  : "px-7"
              } ${
                typeof value === "string" &&
                ["x", "÷", "+", "-", "%", "^"].includes(value)
                  ? "w-[45px] h-[45px]"
                  : value === "="
                  ? "col-span-2 w-[115px]"
                  : "w-[65px] h-[45px]"
              }  ${index % 5 === 3 ? "ml-2.5" : ""} ${
                index % 5 === 4 ? "mr-2.5" : ""
              }`}
              onClick={() => handleButtonClick(value)}
              tabIndex={0}
            >
              <p
                className={`text-2xl ${
                  value === "=" ? "text-black" : "text-white"
                }`}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
