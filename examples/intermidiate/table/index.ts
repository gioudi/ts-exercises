import { Animal } from './Animal';


function listAnimals(animal: Animal){
    const bodyTable: HTMLElement = document.getElementById('body-table')

       return animal.map((an)=> 
            bodyTable.innerHTML += `<tr> 
            <td>${an.ID}</td>
            <td>${an.name}</td> </tr> ` 
        )
   
}


const payload: Animal = [
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
]

listAnimals(payload)













