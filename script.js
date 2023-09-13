let diccionario = ['ACTOR', 'AGUAS', 'ALBAS', 'ALTAR']
let indice = diccionario[Math.floor(Math.random() * diccionario.length-1)+1];
console.log(indice);
let palabra =  diccionario[indice];
console.log(palabra);
let intentos = 5;
fetch("https://random-word-api.herokuapp.com/word?length=5")
.then(response=> response.json())
.then (response=>{
    console.log(response)
    palabra = response[0].toUpperCase()
})
.catch(err => console.error(err));
window.addEventListener('load', init)

function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web');
}

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

const input = document.getElementById("guess-input");
const valor = input.value;

const GRID = document.getElementById("grid");
const ROW = document.createElement('div');
ROW.className = 'row';


function intentar(){
    
        const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)

    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!</h1>")
           return
       }
   
           intentos--;
           if (intentos==0){
               terminar("<h1>PERDISTE!</h1>");
           }
        }
    




function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}


