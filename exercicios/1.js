/*1 - Definir una función max() que tome como argumento dos números y devuelva el mayor de ellos*/

function max(x, y){
    if(x > y){
        return x
    }
    if(y > x){
        return y
    }
    if(x === y){
        return x
    }
    else{
        return NaN
    }
}

let num1 = '5'
let num2 = 5

console.log(max(num1, num2))