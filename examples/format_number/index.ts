const numbertoFormat: HTMLInputElement = document.getElementById('payload') as 
HTMLInputElement;
const selectElement: HTMLSelectElement = document.getElementById('selectElement') as 
HTMLSelectElement;
const chosenFormat = document.getElementById('formatSelect');


function getFormatNumber(data: number, kind: string){
    const bodyDiv: HTMLElement = document.getElementById('bodyDiv');
    
   
       if(data !== null && kind !== null) {
     
          const result = new Intl.NumberFormat(kind, {
               minimumFractionDigits: 2,
            
           }).format(data)
    
           return (
               bodyDiv.innerHTML += `
               <h2>Result</h2>
               <span>${result}</span>`)
       }else {
           return (
            
               bodyDiv.innerHTML += `
               <h2>Error message: </h2>
               <span>Firts at all, you must enter information</span>`) 
       }
   }
   
chosenFormat.addEventListener('click',() => {
    let indexSelect = selectElement.options[selectElement.selectedIndex].value;

    getFormatNumber(Number(numbertoFormat.value), String(indexSelect))
})

