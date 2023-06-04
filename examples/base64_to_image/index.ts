
const data64: HTMLTextAreaElement = document.getElementById('payload') as HTMLTextAreaElement;
const convertButton = document.getElementById('convert');


function getFileFromBase64(base64String: string) {
    let img = new Image();
    img.src = base64String;  
    return img;
}

convertButton.addEventListener('click', ()=> {
    document.body.appendChild(getFileFromBase64(data64.value))
})






