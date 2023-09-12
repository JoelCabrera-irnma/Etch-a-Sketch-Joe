
const clicker = document.querySelector('.click')
clicker.addEventListener('click',createSquare)
 
function createSquare(){
    let input = prompt('Ingresa un numero de lado de cuadricula')
    const contenedor = document.querySelector('.contenedor');
    contenedor.style.gridTemplateColumns = `repeat(${input},1fr)`;
    contenedor.style.gridTemplateRows = `repeat(${input},1fr)`;
        
    
    console.log(input)
    for(let i=0; i<input*input; i++){
        
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        contenedor.appendChild(squareDiv);
        
        squareDiv.addEventListener('mouseover', () => 
        {squareDiv.classList.add('newColor');
            }
        );
    }
}




