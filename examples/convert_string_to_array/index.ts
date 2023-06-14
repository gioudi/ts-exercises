const cString: HTMLInputElement = document.getElementById('cString') as HTMLInputElement;
const convertS = document.getElementById('convertS');



function convertStringToArray(payload: string){
    return payload.trim().split(" ")
}


function getConvertStringToArray(){
    const bodyDiv: HTMLElement = document.getElementById('bodyDiv');

    if(cString.value !== null) {
        let result = convertStringToArray(cString.value); 
        return (
            bodyDiv.innerHTML += `
            <h2>Result</h2>
             <span>[${result}]</span>`)
     }
}

convertS.addEventListener('click', getConvertStringToArray)