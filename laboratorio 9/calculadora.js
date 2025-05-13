//funciones matematicas 

function sumar (a,b ) {
    return a + b;
}
function restar (a,b) {
    return a - b;
}
function multiplicar (a,b) {
    return a * b; 

}
function dividir (a,b) { 
    if (b===0) {
        return `error, division por cero`;
    } else{
    return a/b; }
}


//FUNCION CALCULADORA
function calculadora(n1,n2,operacion) {
switch(operacion) {
    case `suma`:
    return sumar (n1,n2);
    
    case `resta`:
        return restar (n1,n2);

        case `multiplicar`:
            return multiplicar (n1,n2);
            case `division`: 
            return dividir (n1,n2)
        
}
}

let n1 = parseFloat(prompt("Ingrese el primero numero"));
let n2 = parseFloat(prompt("ingrese el segundo numero "));
let operacion= prompt("Ingrese la operacion(suma, resta, multiplicar, division)");

let resultado = calculadora(n1,n2,operacion);
document.write(`resultado: ${resultado} `);       