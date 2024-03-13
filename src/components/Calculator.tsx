import { HiMiniBackspace } from "react-icons/hi2";

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
const Calculator = () => {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      tabIndex={0}
    >
      <div className="w-full px-6 py-6 sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-[400px] max-h-[367px] bg-primary px-">
        <div className="w-350 col-span-5 bg-primary-BLUE flex justify-end items-center rounded-3xl h-[70px] flex-end mb-6 px-8 shadow-lg ">
          <p>결과값 : 0</p>
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
export default Calculator;
