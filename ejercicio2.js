// Completa la función operation para que realice las 4 operaciones básicas: suma, resta, multiplicacion y division. Dicha funcion debe tomar 3 argumentos: el operador, el primer valor y el segundo valor, además debe retornar el resultado.


const operator = prompt('Por favor selecione la operacion que desea realizar: [ + - * / ]');
const firstValue = parseInt(prompt('Ingrese el primer valor: '))
const secondValue = parseInt(prompt('Ingrese el segundo valor: '))

function operation( operator, firstValue, secondValue ) {
    let result;
    switch (operator){
        case '+': result = firstValue + secondValue;
        break
        case '-': result = firstValue - secondValue;
        break
        case '*': result = firstValue * secondValue;
        break
        case '/': result= firstValue / secondValue;
        break
        default: console.error('Operador no valido');
        return;
    }
    return result
}


const resultado = operation(operator, firstValue, secondValue );
console.log(`el resultadod de su operación es: ${resultado} `)
