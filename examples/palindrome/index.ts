const dataText: HTMLInputElement = document.getElementById('payload') as HTMLInputElement;
const checkButton = document.getElementById('check');




function isPalindrome(payload: string) {
    
    const bodyDiv: HTMLElement = document.getElementById('bodyDiv');

    
    let rules = /[^A-Za-z0-9]/g;
    let formatString = payload.toLocaleLowerCase().replace(rules, '');

    let lengthString = formatString.length;


    for (let index = 0; index < lengthString/2; index++) {
        if(formatString[index] !== formatString[lengthString - 1 - index]) {
            return (
                bodyDiv.innerHTML += `
                <h2>Result</h2>
                 <p>"The word or  sentence is not a palindrome"</p>`)
        }  
    }

    return (
        bodyDiv.innerHTML += `<h2>Result</h2>
         <p>"The word or sentence is a palindrome"</p>`)


}


checkButton.addEventListener('click', ()=> {
    isPalindrome(dataText.value)
})

