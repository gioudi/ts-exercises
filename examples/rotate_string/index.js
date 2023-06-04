var payload = document.getElementById('payload');
var rotateText = document.getElementById('rotateText');
function getRotateText(data) {
    var bodyDiv = document.getElementById('bodyDiv');
    if (data !== null) {
        bodyDiv.innerHTML += "".concat(data);
    }
    var text = bodyDiv.textContent;
    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        bodyDiv.textContent = text;
    }, 100);
}
rotateText.addEventListener('click', function () {
    getRotateText(payload.value);
});
