//Escribir una función que tome un carácter y devuelva True si es una vocal, 
//de lo contrario devuelve False.

function isVogal(l){
    const vogais = ['a', 'e', 'i', 'o', 'u']
    for(letra in vogais){
        if(l === vogais[letra]){
            return true
        }
    }
    return false
}

console.log(isVogal('i'))