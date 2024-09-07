function calculate() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const operatorType = document.getElementById("operator").value;

  let result;

  switch (operatorType) {
    case "+":
      result = Number(num1) + Number(num2);
      break;
    case "-":
      result = Number(num1) - Number(num2);
      break;
    case "*":
      result = Number(num1) * Number(num2);
      break;
    case "/":
      if (Number(num1) === 0) {
        result = "Error! Division by zeror";
      } else {
        result = Number(num1) / Number(num2);
      }
      break;
    default:
      result = "Invalid operator";
  }

  document.getElementById("result").innerText = "Result: " + result.toFixed(2);
}

function resetFields() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("operator").value = "+";
  document.getElementById("result").innerText = "Result: ";
}
