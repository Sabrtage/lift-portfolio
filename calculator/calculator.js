const operand1Input = document.getElementById("operand1Input");
const operand2Input = document.getElementById("operand2Input");
const resultInput = document.getElementById("resultInput");
const operatorSelect = document.getElementById("operatorSelect");

function calculateAndDisplayResult() {
    const operand1 = parseFloat(operand1Input.value);
    const operand2 = parseFloat(operand2Input.value);
    const operator = operatorSelect.value;
    let result;
    if (operator === "/") {
        result = operand1 / operand2;
    } else if (operator === "-") {
        result = operand1 - operand2;
    } else if (operator === "+") {
        result = operand1 + operand2;
    } else if (operator === "*") {
        result = operand1 * operand2;
    }
    resultInput.value = result;
}

operand1Input.addEventListener("input", calculateAndDisplayResult);
operand2Input.addEventListener("input", calculateAndDisplayResult);
operatorSelect.addEventListener("change", calculateAndDisplayResult);
