import { Item, ListCharacters } from "./interfaces";

let characters = {} as ListCharacters

const API_HARRY_POTTER = 'https://marauderapi.fr/api/characters'

window.addEventListener('load', ()=> {
    showListCharacters()
})


function getAllCharacters(): Promise <ListCharacters> {
   return fetch(`${API_HARRY_POTTER}`, {
        method: 'GET',
        "headers": {
            "Content-type" : "application/json"
        }
    })
    .then(response => {
        return response.json() 
    })
    .then(response => {
        return characters = response as ListCharacters
    })
}


function showListCharacters(){ 
    getAllCharacters()
    const charactersTables: HTMLElement = document.getElementById('charactersTable')
    const load: HTMLElement = document.getElementById('load')
    
    load.classList.add('is-flex')
        setTimeout(() => {
            load.classList.add('is-hidden')
            console.log(characters?.items)
            return characters?.items.map((item: Item )=> {
                charactersTables.innerHTML += `<tr> 
                <td>${item.id}</td>
                <td>${item.firstName + item.lastName}</td>
                <td>${item.genre}</td>
                <td>${item.blood ? item.blood : 'Not describe' }</td>
                <td>${item.house}</td>
                <td>${item.alive ? 'Alive' : 'Dead'}</td>
                <td><a href="./views/character-detail.html?id=${item.id}" rel="noopener" target="_blank" >More...</a></td>
                </tr> `
            })
        }, 3000);
    
}



