const base: HTMLInputElement = document.getElementById('numberOne') as HTMLInputElement;
const exp: HTMLInputElement = document.getElementById('numberTwo') as HTMLInputElement;

const raise = document.getElementById('raise')

function powerUp(base: number, exp: number) {
    return base**exp;
}

function showResult(){
    const bodyDiv: HTMLElement = document.getElementById('bodyDiv');


    if(base.value !== null && exp.value !== null ) {
      let squared = powerUp(Number(base.value), Number(exp.value));

      return (
        bodyDiv.innerHTML += `
        <h2>Result</h2>
        <p>${squared}</p>
      `)  
    }
}


raise.addEventListener('click', showResult)
