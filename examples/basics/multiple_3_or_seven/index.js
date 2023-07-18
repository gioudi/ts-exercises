var chosenNumber = document.getElementById('chosenNumber');
var validateNumber = document.getElementById('validateNumber');
function getValidateNumber(data) {
    var bodyDiv = document.getElementById('bodyDiv');
    if (data % 3 === 0) {
        return (bodyDiv.innerHTML += "\n            <h2>Result</h2>\n            <span>".concat(data, " is a multiple of 3</span>"));
    }
    else if (data % 7 === 0) {
        return (bodyDiv.innerHTML += "\n            <h2>Result</h2>\n            <span>".concat(data, " is a multiple of 7</span>"));
    }
    else {
        return (bodyDiv.innerHTML += "\n            <h2>Result</h2>\n            <span>".concat(data, " is not a multiple of 7 or 3</span>"));
    }
}
validateNumber.addEventListener('click', function () {
    getValidateNumber(Number(chosenNumber.value));
});
