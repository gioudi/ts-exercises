var dataText = document.getElementById('payload');
var checkButton = document.getElementById('check');
function isPalindrome(payload) {
    var bodyDiv = document.getElementById('bodyDiv');
    var rules = /[^A-Za-z0-9]/g;
    var formatString = payload.toLocaleLowerCase().replace(rules, '');
    var lengthString = formatString.length;
    for (var index = 0; index < lengthString / 2; index++) {
        if (formatString[index] !== formatString[lengthString - 1 - index]) {
            return (bodyDiv.innerHTML += "\n                <h2>Result</h2>\n                 <p>\"The word or  sentence is not a palindrome\"</p>");
        }
    }
    return (bodyDiv.innerHTML += "<h2>Result</h2>\n         <p>\"The word or sentence is a palindrome\"</p>");
}
checkButton.addEventListener('click', function () {
    isPalindrome(dataText.value);
});
