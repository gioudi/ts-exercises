//c/laragon/www/TypeScript/examples/intermidiate/fetch/getListUsersJsonServer
import { User } from "./User";
const URL_API = 'https://jsonplaceholder.typicode.com'


function getListUsers(): Promise<User> {
    return fetch(`${URL_API}/users`,{
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


function showListUsers(){
    const usersTable: HTMLElement = document.getElementById('usersTable')
    const load: HTMLElement = document.getElementById('load')
    
    load.classList.add('is-flex')
     setTimeout(() => {
        getListUsers().then(list=> {
            load.classList.add('is-hidden')
            return list.map((item)=> {
                usersTable.innerHTML += `<tr> 
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.username}</td>
                <td>${item.email}</td>
                <td>${item.address.street}-${item.address.city}</td>
                <td>${item.phone}</td>
                <td>${item.website}</td>
                <td>${item.company.name}</td>
                <td><a href="../getListUserJsonServer/index.html" rel="noopener" target="_blank" >Detail</a></td>
              </tr> `
            })
           }) 
     }, 3000);
    
    
}

document.addEventListener('DOMContentLoaded', ()=>{
    showListUsers()
})