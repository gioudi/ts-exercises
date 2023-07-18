const textExample: HTMLInputElement = document.getElementById('textExample') as HTMLInputElement;
const countVowels = document.getElementById('countVowels');


function vowelCount(data:string) {
    return data.replace(/[^aeiou]/g,"").length;
}


function getVowelCount() {
    const bodyDiv: HTMLElement = document.getElementById('bodyDiv');

    if(textExample.value !== null) {
        let result = vowelCount(textExample.value); 
        return (
            bodyDiv.innerHTML += `
            <h2>Result</h2>
             <span>Total: ${result}</span>`)
        
     }
}

countVowels.addEventListener('click', ()=>{
    getVowelCount();
})


