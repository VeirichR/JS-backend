//Escribir una función sum() y una función multip() que sumen y multipliquen respectivamente todos los 
//números de una lista. Por ejemplo: sum([1,2,3,4]) debería devolver 10 y multip([1,2,3,4]) debería 
//devolver 24.

function sum(args){
    soma = 0
    for(i in args){
        soma += args[i]
    }
    return soma
}

function mul(args){
    result = 1
    try{
        for(i in args){
            result *= args[i]
        }
        return result
    }
    catch(error){
        console.log(error)
    }
}

console.log(sum([1,2,3,4,10]))
console.log(mul([1,2,3,4,10]))