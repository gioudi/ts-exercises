import { Breeds } from "./breeds";
const CAT_FAST_API = 'https://catfact.ninja'





function getListBreeds(): Promise<Breeds> {
    return fetch(`${CAT_FAST_API}/breeds`,{
        "method": "GET",
        "headers": {
            "Content-type" : "application/json"
        }
    })
    .then(response => {
        return response.json()
    })
    .then(response => {
        return response.data as Breeds
    })
    
}


function showListBreeds(){
    const breedsTable: HTMLElement = document.getElementById('breedsTable')
    const load: HTMLElement = document.getElementById('load')
    
    load.classList.add('is-flex')
     setTimeout(() => {
        getListBreeds().then(list=> {
            load.classList.add('is-hidden')
            return list.map((item)=> {
                breedsTable.innerHTML += `<tr> 
                <td>${item.breed}</td>
                <td>${item.country}</td>
                <td>${item.origin}</td>
                <td>${item.coat}</td>
                <td>${item.pattern}</td>
              </tr> `
            })
           }) 
     }, 3000);
    
    
}

document.addEventListener('DOMContentLoaded', ()=>{

    showListBreeds()

})