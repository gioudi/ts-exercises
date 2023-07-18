const eString: HTMLInputElement = document.getElementById('eString') as HTMLInputElement;
const nExtract: HTMLInputElement = document.getElementById('nExtract') as HTMLInputElement;
const extractC = document.getElementById('extractC');



function sliceString(payload: string, amount: number){
    return payload.slice(0,amount)
}


function getSliceString(){
    const bodyDiv: HTMLElement = document.getElementById('bodyDiv');

    if(eString.value !== null && nExtract.value !== null) {
        let result = sliceString(eString.value,Number(nExtract.value)); 
        return (
            bodyDiv.innerHTML += `
            <h2>Result</h2>
             <span>${result}</span>`)
     }
}

extractC.addEventListener('click', getSliceString)