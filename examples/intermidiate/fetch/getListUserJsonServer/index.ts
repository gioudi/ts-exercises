//c/laragon/www/TypeScript/examples/intermidiate/fetch/getListUserJsonServer
import { User } from "./User";
const URL_API = 'https://jsonplaceholder.typicode.com'


function getUser(): Promise<User> {
    return fetch(`${URL_API}/users/1`,{
        "method": "GET",
        "headers": {
            "Content-type" : "application/json"
        }
    })
    .then(response => {
        return response.json()
    })
    .then(response => {
        return response as User
    })
    
}


function showUser(){
    const detailUser: HTMLElement = document.getElementById('detailUser')
    const load: HTMLElement = document.getElementById('load')
    
    load.classList.add('is-flex')
     setTimeout(() => {
        getUser().then(user=> {
            load.classList.add('is-hidden')
            return [
                detailUser.innerHTML += `
                
                <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">${user.id} ${user.name}</p>
                    <p class="subtitle is-6">${user.email}</p>
                  </div>
                </div>
            
                <div class="content">
                  <ul>
                  <li>Address: ${user.address.street}-${user.address.city}</li>
                  <li>Phone: ${user.phone}</li>
                  <li>Website: ${user.website}</li>
                  <li> Company: ${user.company.name}</li>
                  </ul>
                </div>
              </div> `
            ]
           }) 
     }, 3000);
    
    
}

document.addEventListener('DOMContentLoaded', ()=>{
    showUser()
})