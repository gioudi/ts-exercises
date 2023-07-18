const chosenNumber: HTMLInputElement = document.getElementById('chosenNumber') as 
HTMLInputElement;

const validateNumber = document.getElementById('validateNumber');


function getValidateNumber(data: number){
    const bodyDiv: HTMLElement = document.getElementById('bodyDiv');

    if (data % 3 === 0) {
        return (
            bodyDiv.innerHTML += `
            <h2>Result</h2>
            <span>${data} is a multiple of 3</span>`)
    }else if(data % 7 === 0) {
        return (
            bodyDiv.innerHTML += `
            <h2>Result</h2>
            <span>${data} is a multiple of 7</span>`)
    }else {
        return (
            bodyDiv.innerHTML += `
            <h2>Result</h2>
            <span>${data} is not a multiple of 7 or 3</span>`)
    }



}

validateNumber.addEventListener('click', ()=> {
    getValidateNumber(Number(chosenNumber.value))
})

   


