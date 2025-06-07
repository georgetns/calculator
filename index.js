let firstNumber = -1;
let secondNumber = -1;
let operator = "";
let numberDivs = document.querySelectorAll(".blue");
let resultDiv = document.querySelector(".result");

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const operate = (x, y, operator) => {
    switch (operator) {
        case "+":
            add(x, y);
            return;
        case "-":
            substract(x, y);
            return;
        case "x":
            multiply(x, y);
            return;
        case "%":
            divide(x, y);
            return;
    }
};

const updateDisplay = (input) => {
    if (resultDiv.innerText.length < 10) {
        resultDiv.innerText += input;
    }
    if (operator === "") {
        firstNumber = Number(resultDiv.innerText);
    } else {
        secondNumber = Number(resultDiv.innerText);
    }
};

for (node of numberDivs) {
    console.log(node);
    node.addEventListener("click", (e) => {
        updateDisplay(e.target.innerText);
    });
}
