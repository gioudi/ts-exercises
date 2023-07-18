var emailH = document.getElementById('emailH');
var hideEmail = document.getElementById('hideEmail');
function protectEmail(payload) {
    var email_splitted = payload.split("@");
    var slice_email = email_splitted[0].length / 2;
    var part1 = email_splitted[0].substring(0, (email_splitted[0].length - slice_email));
    var part2 = email_splitted[1];
    return part1 + "***@" + part2;
}
function getProtectEmail() {
    var bodyDiv = document.getElementById('bodyDiv');
    if (emailH.value !== null) {
        var result = protectEmail(emailH.value);
        return (bodyDiv.innerHTML += "\n            <h2>Result</h2>\n             <span>".concat(result, "</span>"));
    }
}
hideEmail.addEventListener('click', getProtectEmail);
