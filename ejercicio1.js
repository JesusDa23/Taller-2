const notas = [3.5, 2.0, 3.0, 5.0];
let suma = 0

function calcularNotas (){
    for(i = 0 ; i < notas.length; i++){
        suma += notas[i];
    }
    let promedio = suma / notas.length;
    console.log(promedio)
    return promedio
}

let promedio = calcularNotas()


function calificacion (promedio){

    if (promedio >= 4.8 && promedio <= 5.0){
        console.log('E = Excelente');
    }
    else if (promedio >= 4.5 && promedio < 4.8){
        console.log('MB = Muy bien');
    }
    else if (promedio >= 4.0 && promedio < 4.5){
        console.log('Bueno');
    }
    else if (promedio >= 3.5 && promedio < 4.0){
        console.log('Aprobado');
    }
    else {
        console.log('Reprobado');
    }
}

calificacion(promedio)