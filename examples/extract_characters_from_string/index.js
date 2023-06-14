var eString = document.getElementById('eString');
var nExtract = document.getElementById('nExtract');
var extractC = document.getElementById('extractC');
function sliceString(payload, amount) {
    return payload.slice(0, amount);
}
function getSliceString() {
    var bodyDiv = document.getElementById('bodyDiv');
    if (eString.value !== null && nExtract.value !== null) {
        var result = sliceString(eString.value, Number(nExtract.value));
        return (bodyDiv.innerHTML += "\n            <h2>Result</h2>\n             <span>".concat(result, "</span>"));
    }
}
extractC.addEventListener('click', getSliceString);
