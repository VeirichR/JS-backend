/*3 - Definir una función que calcule la longitud de una lista o una cadena dada.*/
let array = [2, 5, 6, 8, 4, 8, 9, 74, 55, 4]

function length(arg){
    let cont = 0
    for(i in arg){
        cont++
    }
    return cont
}
console.log(length(array))