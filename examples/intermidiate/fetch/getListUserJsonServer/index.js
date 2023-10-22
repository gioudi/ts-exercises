"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URL_API = 'https://jsonplaceholder.typicode.com';
function getUser() {
    return fetch("".concat(URL_API, "/users/1"), {
        "method": "GET",
        "headers": {
            "Content-type": "application/json"
        }
    })
        .then(function (response) {
        return response.json();
    })
        .then(function (response) {
        return response;
    });
}
function showUser() {
    var detailUser = document.getElementById('detailUser');
    var load = document.getElementById('load');
    load.classList.add('is-flex');
    setTimeout(function () {
        getUser().then(function (user) {
            load.classList.add('is-hidden');
            return [
                detailUser.innerHTML += "\n                \n                <div class=\"card-content\">\n                <div class=\"media\">\n                  <div class=\"media-content\">\n                    <p class=\"title is-4\">".concat(user.id, " ").concat(user.name, "</p>\n                    <p class=\"subtitle is-6\">").concat(user.email, "</p>\n                  </div>\n                </div>\n            \n                <div class=\"content\">\n                  <ul>\n                  <li>Address: ").concat(user.address.street, "-").concat(user.address.city, "</li>\n                  <li>Phone: ").concat(user.phone, "</li>\n                  <li>Website: ").concat(user.website, "</li>\n                  <li> Company: ").concat(user.company.name, "</li>\n                  </ul>\n                </div>\n              </div> ")
            ];
        });
    }, 3000);
}
document.addEventListener('DOMContentLoaded', function () {
    showUser();
});
