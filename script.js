let currentInput = "";
let lastAnswer = false;

const display = document.getElementById("display");
const history = document.getElementById("history");

function updateDisplay() {
    display.textContent = currentInput || "0";
}

function appendValue(value) {

    if (lastAnswer) {
        currentInput = "";
        lastAnswer = false;
    }

    currentInput += value;
    updateDisplay();
}

function appendDecimal() {

    const parts = currentInput.split(/[+\-*/]/);
    const currentNumber = parts[parts.length - 1];

    if (!currentNumber.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = "";
    history.textContent = "";
    updateDisplay();
}

function calculate() {

    try {

        if (currentInput.trim() === "") return;

        const expression = currentInput;
        const result = eval(expression);

        // Division by zero protection
        if (!isFinite(result)) {
            display.textContent = "Cannot divide by 0";
            currentInput = "";
            return;
        }

        history.textContent = `${expression} =`;

        currentInput = result.toString();
        display.textContent = currentInput;

        lastAnswer = true;

    } catch (error) {
        display.textContent = "Error";
        currentInput = "";
    }
}