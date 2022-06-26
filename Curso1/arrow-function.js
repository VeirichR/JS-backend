function apresentar(nome){
    return `meu nome eh ${nome}`
}

//arrow function  param
const apresentar2 = nome => `meu nome eh ${nome}`
//            mais de um param fica entre ()
const soma = (num1, num2) => num1 + num2
// Nao pode ser nomeada
// Sempre vem com uma const e o nome da variavel

// Arrow function com mais de uma linha de instrucao
const somaNumerosPequenos = (num1, num2) => {
    if(num1 || num2 > 10){
        return 'Numeros muito grandes'
    }
    else{
        return num1 + num2
    }
}
console.log(somaNumerosPequenos(9, 4))
// Arrow se comporta igual a expressao de funcao
// nao entra no hoisting