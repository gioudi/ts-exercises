"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sideOne = document.getElementById('sideOne');
var sideTwo = document.getElementById('sideTwo');
var sideThree = document.getElementById('sideThree');
var getArea = document.getElementById('getArea');
function getAreaTriangle(data) {
    var bodyDiv = document.getElementById('bodyDiv');
    if (Object.keys(data).length === 0) {
        console.log("Uff!!! We have a problem");
    }
    else {
        var sideOne_1 = data.sideOne, sideTwo_1 = data.sideTwo, sideThree_1 = data.sideThree;
        var totalSide = (sideOne_1 + sideTwo_1 + sideThree_1) / 2;
        var area = Math.sqrt(totalSide * ((totalSide - sideOne_1) * (totalSide - sideTwo_1) * (totalSide - sideThree_1)));
        return (bodyDiv.innerHTML += "\n            <h2>The triangle area is: </h2>\n            <span>".concat(area, "</span>"));
    }
}
getArea.addEventListener('click', function () {
    var inputSides = {
        sideOne: Number(sideOne.value),
        sideTwo: Number(sideTwo.value),
        sideThree: Number(sideThree.value),
    };
    getAreaTriangle(inputSides);
});
