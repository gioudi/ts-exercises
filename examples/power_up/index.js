var base = document.getElementById('numberOne');
var exp = document.getElementById('numberTwo');
var raise = document.getElementById('raise');
function powerUp(base, exp) {
    return Math.pow(base, exp);
}
function showResult() {
    var bodyDiv = document.getElementById('bodyDiv');
    if (base.value !== null && exp.value !== null) {
        var squared = powerUp(Number(base.value), Number(exp.value));
        return (bodyDiv.innerHTML += "\n        <h2>Result</h2>\n        <p>".concat(squared, "</p>\n      "));
    }
}
raise.addEventListener('click', showResult);
