const nomes = ['renato', 'Joao', 'Juliana', 'Ana', 'Caio', 'Lara', 'Pedro']

const sala1 = nomes.slice(0, nomes.length/2) // excludente
const sala2 = nomes.slice(nomes.length/2) // se nao coloca nada ele vai ate o final,

console.log('sala1 ' + sala1)
console.log('sala2 ' + sala2)
