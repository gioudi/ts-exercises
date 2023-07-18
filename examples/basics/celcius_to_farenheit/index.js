var celcious = document.getElementById('celcious');
var convertValue = document.getElementById('convertF');
function convertToFahrenheit(data) {
    return data * 9 / 5 + 32;
}
function convert() {
    var bodyDiv = document.getElementById('bodyDiv');
    if (celcious.value !== null) {
        var result = convertToFahrenheit(Number(celcious.value));
        return (bodyDiv.innerHTML += "\n            <h2>Result</h2>\n             <span>".concat(celcious.value, " &deg;C is ").concat(result, " &deg;F</span>"));
    }
}
convertValue.addEventListener('click', convert);
