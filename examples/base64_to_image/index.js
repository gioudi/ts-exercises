var data64 = document.getElementById('payload');
var convertButton = document.getElementById('convert');
function getFileFromBase64(base64String) {
    var img = new Image();
    img.src = base64String;
    return img;
}
convertButton.addEventListener('click', function () {
    document.body.appendChild(getFileFromBase64(data64.value));
});
