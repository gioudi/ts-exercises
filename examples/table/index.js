"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function listAnimals(animal) {
    var bodyTable = document.getElementById('body-table');
    return animal.map(function (an) {
        return bodyTable.innerHTML += "<tr> \n            <td>".concat(an.ID, "</td>\n            <td>").concat(an.name, "</td> </tr> ");
    });
}
var payload = [
    {
        ID: 1,
        name: "Dog"
    },
    {
        ID: 2,
        name: "Dog"
    },
    {
        ID: 3,
        name: "Dog"
    },
    {
        ID: 4,
        name: "Dog"
    }
];
listAnimals(payload);
