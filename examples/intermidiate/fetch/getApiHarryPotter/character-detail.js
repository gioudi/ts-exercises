"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var character = {};
var API_HARRY_POTTER = 'https://marauderapi.fr/api/characters';
window.addEventListener('load', function () {
    showDetailCharacter();
});
var getParamFromUrl = function (param) {
    var url = new URL(document.URL);
    return url.searchParams.get(param);
};
function getDetailCharacter() {
    var id = getParamFromUrl('id');
    return fetch("".concat(API_HARRY_POTTER, "/").concat(id), {
        method: 'GET',
        "headers": {
            "Content-type": "application/json"
        }
    })
        .then(function (response) {
        return response.json();
    })
        .then(function (response) {
        return character = response;
    });
}
function showDetailCharacter() {
    getDetailCharacter();
    var bodyDiv = document.getElementById('bodyDiv');
    var load = document.getElementById('load');
    load.classList.add('is-flex');
    setTimeout(function () {
        load.classList.add('is-hidden');
        return [
            bodyDiv.innerHTML += "\n                <div class=\"card-image\">\n                <figure class=\"image is-4by3\">\n                  <img src=".concat(character.picture, " alt=").concat(character.firstName, ">\n                </figure>\n              </div>\n              <div class=\"card-content\">\n                <div class=\"media\">\n                  <div class=\"media-left\">\n                    <figure class=\"image is-48x48\">\n                    <img src=").concat(character.picture, " alt=").concat(character.firstName, ">\n                    </figure>\n                  </div>\n                  <div class=\"media-content\">\n                    <p class=\"title is-4\">").concat(character.firstName + character.lastName, "</p>\n                    <p class=\"subtitle is-6\">").concat(character.genre, "</p>\n                  </div>\n                </div>\n            \n                <div class=\"content\">\n                  Blood: ").concat(character.blood, "\n                  <br>\n                  House: ").concat(character.house, "\n                  <br>\n                  Birthdate: ").concat(character.birthdate, "\n                </div>\n              </div> ")
        ];
    }, 3000);
}
