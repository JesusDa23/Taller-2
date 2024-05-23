const corrales = [
    [ 'oveja', 'oveja', '', 'oveja', '' ],
    [ 'oveja', 'oveja', 'oveja', 'oveja', '' ],
    [ 'oveja', 'muerta', 'lobo', '', 'muerta' ]
]

// Contar las ovejas vivas: Recorre cada corral y determina cuántas ovejas sanas y salvas hay en total.

function contarOvejasVivas(corrales){
    let contar = 0
    for(i = 0; i < corrales.length ; i++){
        for(j = 0; j < corrales[i].length; j++){
            if (corrales[i][j] === 'oveja'){
                contar++
            }
        }
        
    }
    console.log(`El total de las ovejas vivas y sanas son: ${contar}`)
}
contarOvejasVivas(corrales);



// Quitar las ovejas muertas y dejar el espacio libre

function eliminarMuertas(corrales){
    for(i = 0; i < corrales.length ; i++){
        for(j = 0; j < corrales[i].length; j++){
            if (corrales[i][j] === 'muerta'){
                corrales[i][j] = ''
            }
        }
    }
}

eliminarMuertas(corrales)
console.log(corrales)



// corrales[2].splice(1,1,'')
// corrales[2].splice(4,1,'')


// Quitar el lobo y deja el espacio libre
function eliminarLobo(corrales){
    for(i = 0; i < corrales.length ; i++){
        for(j = 0; j < corrales[i].length; j++){
            if (corrales[i][j] === 'lobo'){
                corrales[i][j] = ''
            }
        }
    }
}

eliminarLobo(corrales)
console.log(corrales)




// Contar los espacios libres
function contarEspaciosLibres(corrales){
    let contarEspacios = 0
    for(i = 0; i < corrales.length ; i++){
        for(j = 0; j < corrales[i].length; j++){
            if (corrales[i][j] === ''){
                contarEspacios++
            }
        }
        
    }
    console.log(`El total de los espacios libre sin ovejas muertas ni el lobo son: ${contarEspacios}`)
}

contarEspaciosLibres(corrales)



// anexar ovejas vivas a los espacios libres 

function anexarOvejas(corrales){
    for(i = 0; i < corrales.length ; i++){
        for(j = 0; j < corrales[i].length; j++){
            if (corrales[i][j] === ''){
                corrales[i][j] = 'oveja'
            }
        }
    }
}

anexarOvejas(corrales)
console.log(corrales)