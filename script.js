let click = true;

const clicker = document.querySelector('.click')
clicker.addEventListener('click',createSquare)


document.querySelector('body'),addEventListener('click',function(e){
    if(e.target.tagName !== "BUTTON"){
        click = !click
    }
})

 
function createSquare(){
    let input = prompt('Ingresa un numero de lado de cuadricula')
    const contenedor = document.querySelector('.contenedor');
    contenedor.style.gridTemplateColumns = `repeat(${input},1fr)`;
    contenedor.style.gridTemplateRows = `repeat(${input},1fr)`;
    
    console.log(input)
    for(let i=0; i<input*input; i++){
        
        const squareDiv = document.createElement('div');
        //squareDiv.classList.add('square');
        contenedor.appendChild(squareDiv);
        
        squareDiv.addEventListener('mouseover', trazo
        );
    }
}

function trazo(){
    if(click){ 
    this.classList.add('newColor');}
}


/*() => 
        {squareDiv.classList.add('newColor');
            }*/