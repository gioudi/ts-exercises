import { Item } from "./interfaces";

let character = {} as Item

const API_HARRY_POTTER = 'https://marauderapi.fr/api/characters'

window.addEventListener('load', ()=> {
    showDetailCharacter()
})


const getParamFromUrl = (param: string) => {
  const url = new URL(document.URL)
  return url.searchParams.get(param)
}

function getDetailCharacter(): Promise <Item> {
    const id = getParamFromUrl('id');
   return fetch(`${API_HARRY_POTTER}/${id}`, {
        method: 'GET',
        "headers": {
            "Content-type" : "application/json"
        }
    })
    .then(response => {
        return response.json() 
    })
    .then(response => {
        return character = response as Item
    })
}


function showDetailCharacter(){
        
    getDetailCharacter()
    const bodyDiv: HTMLElement = document.getElementById('bodyDiv')
    const load: HTMLElement = document.getElementById('load')
    
    load.classList.add('is-flex')
        setTimeout(() => {
            load.classList.add('is-hidden')
            return [
                bodyDiv.innerHTML += `
                <div class="card-image">
                <figure class="image is-4by3">
                  <img src=${character.picture} alt=${character.firstName}>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                    <img src=${character.picture} alt=${character.firstName}>
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">${character.firstName + character.lastName}</p>
                    <p class="subtitle is-6">${character.genre}</p>
                  </div>
                </div>
            
                <div class="content">
                  Blood: ${character.blood}
                  <br>
                  House: ${character.house}
                  <br>
                  Birthdate: ${character.birthdate}
                </div>
              </div> `]
        }, 3000);
    
}