var chosenYear = document.getElementById('chosenYear');
var validateYear = document.getElementById('validateYear');
function getIsLeapYear(data) {
    var bodyDiv = document.getElementById('bodyDiv');
    if (new Date(data, 1, 29).getMonth() === 1) {
        return (bodyDiv.innerHTML += "\n            <h2>Result</h2>\n             <span>".concat(data, " is a leap year</span>\n            </ul>"));
    }
    else {
        return (bodyDiv.innerHTML += "\n            <h2>Result</h2>\n             <span>".concat(data, " isn't a leap year</span>\n            </ul>"));
    }
}
validateYear.addEventListener('click', function () {
    getIsLeapYear(Number(chosenYear.value));
});
