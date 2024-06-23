let numeroSecreto = 0;
let intentos = 0;
console.log(numeroSecreto);
let numeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

   console.log(intentos)

   if (numeroDeUsuario === numeroSecreto){
    asignarTextoElemento("p",`adivinaste el numero en ${intentos} ${intentos ==1 ? 'intento' : 'intentos'} `);
document.getElementById("reiniciar").removeAttribute("disabled")  
}
   //el usuario no acerto
   else {
    if (numeroDeUsuario > numeroSecreto){
    asignarTextoElemento("p","el numero es menor")
    } else {
        asignarTextoElemento("p","el numero es mayor")
       }
       intentos++;
       limpiarCaja();
   }
   return;
}

function valoresIniciales(){
    asignarTextoElemento ("h1", "numero secreto");
    asignarTextoElemento ("p", `escribe un numero del 1 al ${numeroMaximo}`);
intentos = 1;
numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar el mensaje de numeros de 1 al 10
    //generar numeros alatoreos
    //deshabilitar el boton de reinicio
    valoresIniciales();
    //reiniciar el numero de intentos
    document.getElementById("reiniciar").setAttribute("disabled","true");
}

function limpiarCaja(){
document.getElementById('valorUsuario'). value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(numeroSorteados);
   if (numeroSorteados.length == numeroMaximo){
    asignarTextoElemento("p", "se terminaron los numeros posibles")
   } else
    
{if(numeroSorteados.includes(numeroGenerado)){
return generarNumeroSecreto();
}else {
    numeroSorteados.push(numeroGenerado);
    return numeroGenerado;
}
}
}

valoresIniciales();{

}
