var numbertoFormat = document.getElementById('payload');
var selectElement = document.getElementById('selectElement');
var chosenFormat = document.getElementById('formatSelect');
function getFormatNumber(data, kind) {
    var bodyDiv = document.getElementById('bodyDiv');
    if (data !== null && kind !== null) {
        var result = new Intl.NumberFormat(kind, {
            minimumFractionDigits: 2,
        }).format(data);
        return (bodyDiv.innerHTML += "\n               <h2>Result</h2>\n               <span>".concat(result, "</span>"));
    }
    else {
        return (bodyDiv.innerHTML += "\n               <h2>Error message: </h2>\n               <span>Firts at all, you must enter information</span>");
    }
}
chosenFormat.addEventListener('click', function () {
    var indexSelect = selectElement.options[selectElement.selectedIndex].value;
    getFormatNumber(Number(numbertoFormat.value), String(indexSelect));
});
