var fahrenheit = document.getElementById('fahrenheit');
var convertC = document.getElementById('convertC');
function convertToCelsius(data) {
    return (data - 32) * 5 / 9;
}
function convert() {
    var bodyDiv = document.getElementById('bodyDiv');
    if (fahrenheit.value !== null) {
        var result = convertToCelsius(Number(fahrenheit.value));
        return (bodyDiv.innerHTML += "\n            <h2>Result</h2>\n             <span>".concat(fahrenheit.value, " &deg;F is ").concat(result, " &deg;C</span>"));
    }
}
convertC.addEventListener('click', convert);
