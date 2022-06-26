
function soma(x, y){
    return x + y
}
//console.log(200 + 290)

// parametros X argumentos
// sao a mesma coisa
//                  var=1 para incluir um valor padrao
function multiplica(num1=1, num2=1){
    return num1 * num2
}

console.log(multiplica(soma(4, 5), soma(10, 32)))