export default function Calculate(calc, number, signe) {
  switch (signe) {
    case "+":
      return parseFloat(number) + parseFloat(calc);
    case "x":
      return parseFloat(number) * parseFloat(calc);
    case "-":
      return parseFloat(number) - parseFloat(calc);
    case "/":
      return parseFloat(number) / parseFloat(calc);
    case "%":
      return parseFloat(number) % parseFloat(calc);
    default:
      break;
  }
}
