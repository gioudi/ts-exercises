"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URL_API = 'https://jsonplaceholder.typicode.com';
function getListUsers() {
    return fetch("".concat(URL_API, "/users"), {
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
function showListUsers() {
    var usersTable = document.getElementById('usersTable');
    var load = document.getElementById('load');
    load.classList.add('is-flex');
    setTimeout(function () {
        getListUsers().then(function (list) {
            load.classList.add('is-hidden');
            return list.map(function (item) {
                usersTable.innerHTML += "<tr> \n                <td>".concat(item.id, "</td>\n                <td>").concat(item.name, "</td>\n                <td>").concat(item.username, "</td>\n                <td>").concat(item.email, "</td>\n                <td>").concat(item.address.street, "-").concat(item.address.city, "</td>\n                <td>").concat(item.phone, "</td>\n                <td>").concat(item.website, "</td>\n                <td>").concat(item.company.name, "</td>\n                <td><a href=\"../getListUserJsonServer/index.html\" rel=\"noopener\" target=\"_blank\" >Detail</a></td>\n              </tr> ");
            });
        });
    }, 3000);
}
document.addEventListener('DOMContentLoaded', function () {
    showListUsers();
});
