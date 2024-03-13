export const calculate = (input: string) => {
  const formattedInput = input.replace("^", "**").replace("%", "%");
  return eval(formattedInput).toString();
};
