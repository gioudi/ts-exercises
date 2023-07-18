"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CAT_FAST_API = 'https://catfact.ninja';
function getListBreeds() {
    return fetch("".concat(CAT_FAST_API, "/breeds"), {
        "method": "GET",
        "headers": {
            "Content-type": "application/json"
        }
    })
        .then(function (response) {
        return response.json();
    })
        .then(function (response) {
        return response.data;
    });
}
function showListBreeds() {
    var breedsTable = document.getElementById('breedsTable');
    var load = document.getElementById('load');
    load.classList.add('is-flex');
    setTimeout(function () {
        getListBreeds().then(function (list) {
            load.classList.add('is-hidden');
            return list.map(function (item) {
                breedsTable.innerHTML += "<tr> \n                <td>".concat(item.breed, "</td>\n                <td>").concat(item.country, "</td>\n                <td>").concat(item.origin, "</td>\n                <td>").concat(item.coat, "</td>\n                <td>").concat(item.pattern, "</td>\n              </tr> ");
            });
        });
    }, 3000);
}
document.addEventListener('DOMContentLoaded', function () {
    showListBreeds();
});
