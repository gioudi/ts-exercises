const numberOne: HTMLInputElement = document.getElementById('numberOne') as HTMLInputElement;
const numberTwo: HTMLInputElement = document.getElementById('numberTwo') as HTMLInputElement;

const calculate = document.getElementById('calculate')

console.log(calculate, numberOne, numberTwo)
function add(a:number, b:number):number {
    return a+b;
}
function subtract(a:number, b:number):number {
    return a-b;
}
function divide(a:number, b:number):number {
    return a/b;
}
function multiply(a:number, b:number):number {
    return a*b;
}



function calculateAll(){
    const bodyDiv: HTMLElement = document.getElementById('bodyDiv');
    
    
    if(numberOne.value !== null && numberTwo.value !== null ) {
        let addition =  add(Number(numberOne.value), Number(numberTwo.value));
        let subtraction =  subtract(Number(numberOne.value), Number(numberTwo.value));
        let multiplication =  multiply(Number(numberOne.value), Number(numberTwo.value));
        let division =  divide(Number(numberOne.value), Number(numberTwo.value));


        return (
            bodyDiv.innerHTML += `
            <h2>Result</h2>
            <ul> 
            <li>'Addition': ${addition}</li>
            <li>'Subtraction': ${subtraction}</li>
            <li>'Multiplication': ${multiplication}</li>
            <li>'Division': ${division}</li>
            </ul>`)


    }
}


calculate.addEventListener('click', calculateAll)
