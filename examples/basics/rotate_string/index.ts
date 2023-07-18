const payload: HTMLInputElement = document.getElementById('payload') as 
HTMLInputElement;

const rotateText = document.getElementById('rotateText');


function getRotateText(data: string){
    const bodyDiv: HTMLElement = document.getElementById('bodyDiv');
       if(data !== null) {
               bodyDiv.innerHTML += `${data}`
       }
       let text = bodyDiv.textContent;
        setInterval(function () 
        {
            text = text[text.length - 1] + text.substring(0, text.length - 1);
            bodyDiv.textContent = text;
        }, 100); 
}
   
rotateText.addEventListener('click',() => {
    getRotateText(payload.value)
})