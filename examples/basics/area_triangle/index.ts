import { Payload } from "./payload";

const sideOne: HTMLInputElement = document.getElementById('sideOne') as 
HTMLInputElement;
const sideTwo: HTMLInputElement = document.getElementById('sideTwo') as 
HTMLInputElement;
const sideThree: HTMLInputElement = document.getElementById('sideThree') as 
HTMLInputElement;

const getArea = document.getElementById('getArea');


function getAreaTriangle(data: Payload) {
    const bodyDiv: HTMLElement = document.getElementById('bodyDiv');

      
    if (Object.keys(data).length === 0) {
        console.log("Uff!!! We have a problem");
    }else {
       
        const {sideOne, sideTwo, sideThree} = data;

        let totalSide = ( sideOne +  sideTwo +  sideThree)/2;

        let area =  Math.sqrt(totalSide*((totalSide - sideOne)*(totalSide - sideTwo)*(totalSide - sideThree)));


        return (
            bodyDiv.innerHTML += `
            <h2>The triangle area is: </h2>
            <span>${area}</span>`)



    }
  
    

}

getArea.addEventListener('click',() => {
    let inputSides: Payload = {
        sideOne : Number(sideOne.value),
        sideTwo : Number(sideTwo.value),
        sideThree : Number(sideThree.value),
    } 
 
    getAreaTriangle(inputSides)
 
})






