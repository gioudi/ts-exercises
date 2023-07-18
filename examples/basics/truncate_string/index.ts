
const payloadText: HTMLInputElement = document.getElementById('payload') as HTMLInputElement;
const truncateButton = document.getElementById('truncate');




function truncate(data:string):string {
    return data.charAt(0).toUpperCase()+ data.slice(1);
}

function uppercase(data:string):string {
    return data.toUpperCase();
}
function lowercase(data:string):string {
    return data.toLocaleLowerCase();
}


function truncateStyleText() {
    const bodyDiv: HTMLElement = document.getElementById('bodyDiv');

    if(payloadText.value !== null) {
        let capitalized = truncate(payloadText.value);
        let upper = uppercase(payloadText.value);
        let lower = lowercase(payloadText.value);
 
        return (
            bodyDiv.innerHTML += `
            <h2>Result</h2>
            <ul > 
            <li>'Capitalized': ${capitalized}</li>
            <li>'Upper': ${upper}</li>
            <li>'Lower': ${lower}</li>
            </ul>`)
      
     
     }

}
























