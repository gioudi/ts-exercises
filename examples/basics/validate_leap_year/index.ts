const chosenYear: HTMLInputElement = document.getElementById('chosenYear') as 
HTMLInputElement;

const validateYear = document.getElementById('validateYear');


function getIsLeapYear(data: number){
    const bodyDiv: HTMLElement = document.getElementById('bodyDiv');
       if(new Date(data, 1, 29).getMonth() === 1) {
            
        return (
            bodyDiv.innerHTML += `
            <h2>Result</h2>
             <span>${data} is a leap year</span>
            </ul>`)
       }else{
        return (
            bodyDiv.innerHTML += `
            <h2>Result</h2>
             <span>${data} isn't a leap year</span>
            </ul>`)
       }

}
   
validateYear.addEventListener('click',() => {
    getIsLeapYear(Number(chosenYear.value))
})