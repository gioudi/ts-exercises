
const fahrenheit: HTMLInputElement = document.getElementById('fahrenheit') as HTMLInputElement;
const convertC = document.getElementById('convertC');


function convertToCelsius(data:number){
    return (data-32) * 5/9;
}


function convert() {
    const bodyDiv: HTMLElement = document.getElementById('bodyDiv');

    if(fahrenheit.value !== null) {
        let result = convertToCelsius(Number(fahrenheit.value)); 
        return (
            bodyDiv.innerHTML += `
            <h2>Result</h2>
             <span>${fahrenheit.value} &deg;F is ${result} &deg;C</span>`)
        
     }
}

convertC.addEventListener('click',convert)
