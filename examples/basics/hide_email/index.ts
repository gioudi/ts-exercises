const emailH: HTMLInputElement = document.getElementById('emailH') as HTMLInputElement;
const hideEmail = document.getElementById('hideEmail');



function protectEmail(payload: string){
    let email_splitted = payload.split("@");
    let slice_email =  email_splitted[0].length / 2;
    let part1 = email_splitted[0].substring(0, (email_splitted[0].length - slice_email))
    let part2 =email_splitted[1]

    return part1 + "***@" + part2;
}


function getProtectEmail(){
    const bodyDiv: HTMLElement = document.getElementById('bodyDiv');

    if(emailH.value !== null) {
        let result = protectEmail(emailH.value); 
        return (
            bodyDiv.innerHTML += `
            <h2>Result</h2>
             <span>${result}</span>`)
     }
}

hideEmail.addEventListener('click', getProtectEmail)