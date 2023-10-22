"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var characters = {};
var API_HARRY_POTTER = 'https://marauderapi.fr/api/characters';
window.addEventListener('load', function () {
    showListCharacters();
});
function getAllCharacters() {
    return fetch("".concat(API_HARRY_POTTER), {
        method: 'GET',
        "headers": {
            "Content-type": "application/json"
        }
    })
        .then(function (response) {
        return response.json();
    })
        .then(function (response) {
        return characters = response;
    });
}
function showListCharacters() {
    getAllCharacters();
    var charactersTables = document.getElementById('charactersTable');
    var load = document.getElementById('load');
    load.classList.add('is-flex');
    setTimeout(function () {
        load.classList.add('is-hidden');
        console.log(characters === null || characters === void 0 ? void 0 : characters.items);
        return characters === null || characters === void 0 ? void 0 : characters.items.map(function (item) {
            charactersTables.innerHTML += "<tr> \n                <td>".concat(item.id, "</td>\n                <td>").concat(item.firstName + item.lastName, "</td>\n                <td>").concat(item.genre, "</td>\n                <td>").concat(item.blood ? item.blood : 'Not describe', "</td>\n                <td>").concat(item.house, "</td>\n                <td>").concat(item.alive ? 'Alive' : 'Dead', "</td>\n                <td><a href=\"./views/character-detail.html?id=").concat(item.id, "\" rel=\"noopener\" target=\"_blank\" >More...</a></td>\n                </tr> ");
        });
    }, 3000);
}
