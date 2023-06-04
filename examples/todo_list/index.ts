import { Planets } from "./planets";



const newItem: HTMLInputElement = document.getElementById('newItem') as HTMLInputElement;
const buttonAdd = document.getElementById('buttonAdd');

const content: HTMLElement = document.getElementById('content');

const planets: Planets = [
    {
        name: 'Mercurio'
    },
    {
        name: 'Venus'
    }
]


document.addEventListener('DOMContentLoaded', () => {
    planets.map((planet) =>
        content.innerHTML += `<li class="is-flex is-justify-content-space-between">${planet.name} <button onclick=\"updateTextArea(\'" + id + "\')\">Remove</button></li> `
    )
})



function addNewItem(data: string) {
    if (data !== null) {
        let payload = {
            name: data
        }
        content.innerHTML = ""
        planets.push(payload);
        return (
            planets.map((planet) =>
                content.innerHTML += `<li class="is-flex is-justify-content-space-between">${planet.name} 
            <button type='button' onclick=\"updateTextArea(\'" + id + "\')\">Remove</button></li> `
            ))


    }
    else {
        window.alert('You must enter a new item');
    }
}

function removeItem(data: string) {
    if (data !== null) {
        content.innerHTML = ""
        let newPlanets = planets.filter((planet) => {
            return planet.name !== data
        })
        return (
            newPlanets.map((planet) =>
                content.innerHTML += `<li class="is-flex is-justify-content-space-between">${planet.name}  <button type='button' onclick=\"removeText(\'" + planet.name + "\')\">Remove</button></li> `
            ))


    }
    else {
        window.alert('You must enter a new item');
    }
}






buttonAdd.addEventListener('click', () => {
    addNewItem(newItem.value)
})
