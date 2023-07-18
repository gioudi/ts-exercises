
const celcious: HTMLInputElement = document.getElementById('celcious') as HTMLInputElement;
const convertValue = document.getElementById('convertF');


function convertToFahrenheit(data:number){
    return data * 9/5 +32;
}


function convert() {
    const bodyDiv: HTMLElement = document.getElementById('bodyDiv');

    if(celcious.value !== null) {
        let result = convertToFahrenheit(Number(celcious.value)); 
        return (
            bodyDiv.innerHTML += `
            <h2>Result</h2>
             <span>${celcious.value} &deg;C is ${result} &deg;F</span>`)
        
     }
}

convertValue.addEventListener('click',convert)





























