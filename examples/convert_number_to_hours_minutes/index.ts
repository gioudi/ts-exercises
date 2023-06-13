const numberToHM: 
HTMLInputElement = document.getElementById('numberToHM') as HTMLInputElement;
const convertToHM = document.getElementById('convertToHM');

function timeConvert(data:number) {
    let hours = Math.floor(data / 60)
    let minutes = data % 60; 
    return {hours, minutes}
}


function getTimeConvert() {
    const bodyDiv: HTMLElement = document.getElementById('bodyDiv');

    if(numberToHM.value !== null) {
        let {hours, minutes} = timeConvert(Number(numberToHM.value)); 
        return (
            bodyDiv.innerHTML += `
            <h2>Result</h2>
             <span>${hours} : ${minutes}</span>`)
        
     }
}

convertToHM.addEventListener('click', ()=>{
    getTimeConvert();
})
