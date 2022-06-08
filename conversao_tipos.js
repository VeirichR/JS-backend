// tipo de dado
// booleanos

// conversao implicita
// converte um tipo em outro
const numero = 2;
const numeroString = '2';
console.log(numero === numeroString)  //false
console.log(numero == numeroString)  // true
console.log(numero + numeroString)
console.log(typeof numero + ' ' + typeof numeroString)
// === 
// == converteu numa string e comparou

// conversao explicita
// Number()
// String()
console.log(numero + Number(numeroString))