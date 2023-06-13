var textExample = document.getElementById('textExample');
var countVowels = document.getElementById('countVowels');
function vowelCount(data) {
    return data.replace(/[^aeiou]/g, "").length;
}
function getVowelCount() {
    var bodyDiv = document.getElementById('bodyDiv');
    if (textExample.value !== null) {
        var result = vowelCount(textExample.value);
        return (bodyDiv.innerHTML += "\n            <h2>Result</h2>\n             <span>Total: ".concat(result, "</span>"));
    }
}
countVowels.addEventListener('click', function () {
    getVowelCount();
});
