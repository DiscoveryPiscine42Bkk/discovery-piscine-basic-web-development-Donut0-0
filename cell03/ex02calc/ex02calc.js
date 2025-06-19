function calculate() {
  const left = parseInt(document.getElementById("left").value);
  const right = parseInt(document.getElementById("right").value);
  const op = document.getElementById("operator").value;

  if (isNaN(left) || isNaN(right) || left < 0 || right < 0) {
    alert("Error :(");
    return;
  }

  if ((op === '/' || op === '%') && right === 0) {
    alert("It's over 9000!");
    console.log("It's over 9000!");
    return;
  }

  let result;
  switch (op) {
    case '+': result = left + right; break;
    case '-': result = left - right; break;
    case '*': result = left * right; break;
    case '/': result = left / right; break;
    case '%': result = left % right; break;
  }

  alert("Result: " + result);
  console.log("Result: " + result);
}

// Alert every 30 seconds
setInterval(() => {
  alert("Please, use me...");
}, 30000);