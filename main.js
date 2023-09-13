function calculate(e) {
  e.preventDefault();
  // Get input values
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;
  var resultElement = document.getElementById("result");

  // Check if inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    resultElement.innerText = "Please enter valid numbers.";
    return;
  }

  // Perform calculation based on operator
  switch (operator) {
    case "+":
      resultElement.innerText = num1 + num2;
      break;
    case "-":
      resultElement.innerText = num1 - num2;
      break;
    case "*":
      resultElement.innerText = num1 * num2;
      break;
    case "%":
      resultElement.innerText = num1 % num2;
      break;
    case "/":
      resultElement.innerText = num1 / num2;
      break;
    default:
      resultElement.innerText =
        "Invalid operator. Please use +, -, *, %, or /.";
  }
}
