/*Aqui se mostrara lo que la persona vera, para seleccionar el tipo de operacion que quiere :)*/
//Recordar que todas las operaciones que dependan de la variable LET, tienen que hacerse dentro de las llaves, donde estan siendo declaradas.

function calculadora() {
    const operacion = Number(prompt('Escoja una Operacion: \n 1-Suma (+)\n 2- Resta (-)\n 3- Multiplicacion (*)\n 4- Division Real (/)\n 5- Division Entera (%)\n 6- Potenciacion (**)'));

//Aqui se validara si la opcion que se ingresa es valida, si no mostrara error

if (!operacion || operacion >= 7){
    alert('Opcion Invalida, Intente nuevamente');
    calculadora();
}
else {

    //Aqui se declararan las variables que seran usadas para todas las operaciones
//Recordar, que para declarar "Number", tiene que se la primera letra en Mayuscula, del resto no la tomara como valida

let n1 = Number(prompt('Ingrese un Valor'));
let n2 = Number(prompt('Ingrese otro Valor'));
let resultado;

//Aqui se validara que las variables,sean parametros correctos (numeros), si se ingresa otro caracter que muestre error.
    if (!n1 || !n2){
        alert('Parametro Invalido')
        calculadora();
    }
    else {
        //Se crea funcion para realizar la operacion
    function suma() {
        resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            nuevaOperacion();
    }

//Se crea funcion para realizar la operacion
function resta() {
    resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        nuevaOperacion();
}

//Se crea funcion para realizar la operacion
function multiplicacion() {
    resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        nuevaOperacion();
}

//Se crea funcion para realizar la operacion
function divisionReal() {
    resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        nuevaOperacion();
}

//Se crea funcion para realizar la operacion, en este se modifica el texto a mostrar, debido al tipo de operacion, que se conjuga de otra manera
function divisionEntera() {
    resultado = n1 % n2;
        alert(`El resto de la division entre ${n1} y ${n2} es igual ${resultado}`)
        nuevaOperacion();
}

//Se crea funcion para realizar la operacion, en este se modifica el texto a mostrar, debido al tipo de operacion, que se conjuga de otra manera
function potenciacion() {
    resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2}ª es igual a ${resultado}`)
        nuevaOperacion();
}

//Esta funcion es para que pregunte si desea hacer otra operacion o si desea salir de la calculadora

function nuevaOperacion() {
    let opcion = prompt('Deseas hacer una nueva Operacion:\n 1- Si\n 2- No');
        if (opcion == 1){
            calculadora();
        }
        else if (opcion == 2){
            alert('Hasta Luego')
        }
        else {
            alert('Digite una opcion valida')
            nuevaOperacion();
        }

}
    }




//Aqui sera el verificador de la operacion que el usuario eligio.
/*
if (operacion == 1){
    suma();
}else if (operacion == 2){
    resta();
}else if (operacion == 3){
    multiplicacion();
}else if (operacion == 4){
    divisionReal();
}else if (operacion == 5){
    divisionEntera();
}else if (operacion == 6){
    potenciacion();
}
*/
//Aqui sera el verificador de la operacion que el usuario eligio, pero con un Switch

switch (operacion) {
    case 1:
        suma();
        break;
        case 2:
            resta();
            break;
            case 3:
                multiplicacion();
                break;
                case 4:
                    divisionReal();
                    break;
                    case 5:
                        divisionEntera();
                        break;
                        case 6:
                            potenciacion();
                            break;                
    default:
        break;
}
}



}
calculadora();
