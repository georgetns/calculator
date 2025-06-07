let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let numberDivs = document.querySelectorAll(".blue");

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

for (node of numberDivs) {
    console.log(node);
    node.addEventListener("click", (e) => {
        console.log(e.target.innerText);
    });
}
