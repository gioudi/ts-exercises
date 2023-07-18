var numberToHM = document.getElementById('numberToHM');
var convertToHM = document.getElementById('convertToHM');
function timeConvert(data) {
    var hours = Math.floor(data / 60);
    var minutes = data % 60;
    return { hours: hours, minutes: minutes };
}
function getTimeConvert() {
    var bodyDiv = document.getElementById('bodyDiv');
    if (numberToHM.value !== null) {
        var _a = timeConvert(Number(numberToHM.value)), hours = _a.hours, minutes = _a.minutes;
        return (bodyDiv.innerHTML += "\n            <h2>Result</h2>\n             <span>".concat(hours, " : ").concat(minutes, "</span>"));
    }
}
convertToHM.addEventListener('click', function () {
    getTimeConvert();
});
