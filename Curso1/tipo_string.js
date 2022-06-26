//Strings

const texto1 = 'testando str';
const text2 = '2';
console.log(texto1+text2);
console.log(texto1*text2);

const num = '1';
const num2 = '1';
console.log(num+num2);

//template string ou template literal
//concatencacao de strings com +
const nome = 'Renato';
const meu = 'Meu nome eh ';
console.log(meu + nome);

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const cidade3 = "belo horizonte";
const input3 = "Belo Horizonte";

const inputMinusculo = input3.toLowerCase();

console.log(cidade3 === inputMinusculo); // true

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres