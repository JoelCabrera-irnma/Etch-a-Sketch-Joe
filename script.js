//Agregar Boton de Reset, Agregar Button Color blue, add button random color y
//add button color degradez -10%
let colorTrazo = 'black'
let click = true;

const clicker = document.querySelector('.click')
clicker.addEventListener('click',createSquare)


document.querySelector('body').addEventListener('click',function(e){
    if(e.target.nodeName !== "BUTTON"){
        click = !click
    }
})
 
let input = prompt('Ingresa un numero de lado de cuadricula')
const contenedor = document.querySelector('.contenedor');



function createSquare(){
    contenedor.innerHTML = ""
    contenedor.style.gridTemplateColumns = `repeat(${input},1fr)`;
    contenedor.style.gridTemplateRows = `repeat(${input},1fr)`;
    for(let i=0; i<input*input; i++){    
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        contenedor.appendChild(squareDiv);
        squareDiv.addEventListener('mouseover', trazo
        );
    }
}

document.querySelector('#red').addEventListener('click',changeColor)
document.querySelector('#black').addEventListener('click',changeColor)


function changeColor(e){
    //console.log(e)
    if (e.srcElement.id === "black"){
        colorTrazo = 'black'
    }
    else if (e.srcElement.id === "red"){
        colorTrazo = 'red'
    }
}

function trazo(){
    if(click){
        if (colorTrazo==='black') {this.style.backgroundColor = 'black'} //classList.add('newColor');
    } 
    else if(colorTrazo==='red'){this.style.backgroundColor = 'red'} //classList.add('colorRed')
}

document.querySelector('#reset').addEventListener('click',createSquare)

document.querySelector('.newGrilla').addEventListener('click',newInput)

function newInput(){
    input = prompt('Ingresa un nuevo valor de lado de cuadricula');
    createSquare()
}
