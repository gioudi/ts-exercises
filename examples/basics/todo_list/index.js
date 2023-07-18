"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newItem = document.getElementById('newItem');
var buttonAdd = document.getElementById('buttonAdd');
var content = document.getElementById('content');
var planets = [
    {
        name: 'Mercurio'
    },
    {
        name: 'Venus'
    }
];
document.addEventListener('DOMContentLoaded', function () {
    planets.map(function (planet) {
        return content.innerHTML += "<li class=\"is-flex is-justify-content-space-between\">".concat(planet.name, " <button onclick=\"updateTextArea('\" + id + \"')\">Remove</button></li> ");
    });
});
function addNewItem(data) {
    if (data !== null) {
        var payload = {
            name: data
        };
        content.innerHTML = "";
        planets.push(payload);
        return (planets.map(function (planet) {
            return content.innerHTML += "<li class=\"is-flex is-justify-content-space-between\">".concat(planet.name, " \n            <button type='button' onclick=\"updateTextArea('\" + id + \"')\">Remove</button></li> ");
        }));
    }
    else {
        window.alert('You must enter a new item');
    }
}
function removeItem(data) {
    if (data !== null) {
        content.innerHTML = "";
        var newPlanets = planets.filter(function (planet) {
            return planet.name !== data;
        });
        return (newPlanets.map(function (planet) {
            return content.innerHTML += "<li class=\"is-flex is-justify-content-space-between\">".concat(planet.name, " <button type='button' onclick=\"removeText('\" + planet.name + \"')\">Remove</button></li> ");
        }));
    }
    else {
        window.alert('You must enter a new item');
    }
}
buttonAdd.addEventListener('click', function () {
    addNewItem(newItem.value);
});
