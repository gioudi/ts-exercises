var numberOne = document.getElementById('numberOne');
var numberTwo = document.getElementById('numberTwo');
var calculate = document.getElementById('calculate');
console.log(calculate, numberOne, numberTwo);
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function divide(a, b) {
    return a / b;
}
function multiply(a, b) {
    return a * b;
}
function calculateAll() {
    var bodyDiv = document.getElementById('bodyDiv');
    if (numberOne.value !== null && numberTwo.value !== null) {
        var addition = add(Number(numberOne.value), Number(numberTwo.value));
        var subtraction = subtract(Number(numberOne.value), Number(numberTwo.value));
        var multiplication = multiply(Number(numberOne.value), Number(numberTwo.value));
        var division = divide(Number(numberOne.value), Number(numberTwo.value));
        return (bodyDiv.innerHTML += "\n            <h2>Result</h2>\n            <ul> \n            <li>'Addition': ".concat(addition, "</li>\n            <li>'Subtraction': ").concat(subtraction, "</li>\n            <li>'Multiplication': ").concat(multiplication, "</li>\n            <li>'Division': ").concat(division, "</li>\n            </ul>"));
    }
}
calculate.addEventListener('click', calculateAll);
