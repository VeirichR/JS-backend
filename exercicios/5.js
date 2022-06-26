/*Definir una función inversa() que calcule la inversión de una cadena. 
Por ejemplo la cadena "estoy probando" debería devolver la cadena "odnaborp yotse"*/

function inverter(word){
    wordSize = word.length
    let newArray = []
    cont = wordSize -1
     for(let i=0; i < wordSize; i++){
        newArray.push(word[cont])
        cont--
    }
    return newArray.join('').toLowerCase()
}
let teste = inverter('Renato')
console.log(teste)