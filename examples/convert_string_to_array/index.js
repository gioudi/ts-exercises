var cString = document.getElementById('cString');
var convertS = document.getElementById('convertS');
function convertStringToArray(payload) {
    return payload.trim().split(" ");
}
function getConvertStringToArray() {
    var bodyDiv = document.getElementById('bodyDiv');
    if (cString.value !== null) {
        var result = convertStringToArray(cString.value);
        return (bodyDiv.innerHTML += "\n            <h2>Result</h2>\n             <span>[".concat(result, "]</span>"));
    }
}
convertS.addEventListener('click', getConvertStringToArray);
