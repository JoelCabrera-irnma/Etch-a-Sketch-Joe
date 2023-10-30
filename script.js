//add button random color y add button color degradez -10%
let colorTrazo = 'black'
let click = true;

const clicker = document.querySelector('#click')
clicker.addEventListener('click',createSquare)

document.querySelector('body').addEventListener('click',function(e){
    if(e.target.nodeName !== "BUTTON"){
        click = !click
    }
})

let input
function getInput (){
    let inputU = prompt('Ingresa un numero de lado de cuadricula entre 1 y 100');
    if (inputU>100||inputU<1){
            alert('Valor no aceptado');
            getInput();
        }
    else {input = inputU}
    }
getInput();

const contenedor = document.querySelector('.contenedor');
function createSquare(){
    contenedor.innerHTML = ""
    contenedor.style.gridTemplateColumns = `repeat(${input},1fr)`;
    contenedor.style.gridTemplateRows = `repeat(${input},1fr)`;
    for(let i=0; i<input*input; i++){    
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        contenedor.appendChild(squareDiv);
        squareDiv.addEventListener('mouseover', trazo);
    }
}

document.querySelector('#red').addEventListener('click',changeColor)
document.querySelector('#black').addEventListener('click',changeColor)
document.querySelector('#white').addEventListener('click',changeColor)
document.querySelector('#random').addEventListener('click',changeColor)

function changeColor(e){
    if (e.srcElement.id === "black"){
        colorTrazo = 'black'
    }
    else if (e.srcElement.id === "red"){
        colorTrazo = 'red'
    }
    else if (e.srcElement.id === "white"){
        colorTrazo='white'
    }
    else if (e.srcElement.id === "random"){
        colorTrazo='random'
    }      
}
let interacciones = 0;
function trazo(){
    if(click){
        if (colorTrazo==='black') {this.style.backgroundColor = 'black'} //classList.add('newColor');
        else if(colorTrazo==='red'){this.style.backgroundColor = 'red'} //classList.add('colorRed')
        else if(colorTrazo==='white'){this.style.backgroundColor ='white'}
        else if(colorTrazo==='random'){
            this.style.backgroundColor =`hsl(${Math.random()*360},100%,50%)`}
    }}

document.querySelector('#reset').addEventListener('click',createSquare)
document.querySelector('.newGrilla').addEventListener('click',newInput)

function newInput(){
    input = prompt('Ingresa un nuevo valor de lado de cuadricula');
    if (input>100||input<1){
        alert('Valor no aceptado');
        newInput();
    }
    createSquare()
}

document.querySelector('.fondoWhite').addEventListener('click',changeBack)
function changeBack(){
    const squares = document.querySelectorAll('.square');
    squares.forEach(element => {
        element.style.backgroundColor = 'white'
    });
}

