//declaracao de funcao
// function minhaFunc(param){

// }

// expressao de funcao
//const soma = function(num1, num2) {return num1 + num2}
//console.log(soma(1, 3))
// funcoes anonimas, elas em si nao tem nome, se tem a 
// variavel que contem a funcao

// diferenca principal entre declaracao e expressao

// podemos utilizar antes de declarar
console.log(apresentar())
function apresentar(){
    return "ola!"
}
// Nao podemos inicializar a expressao antes de declarar
// se comporta como uma variavel.
//console.log(soma(1, 2))
const soma = function(num1, num2) {return num1 + num2}
