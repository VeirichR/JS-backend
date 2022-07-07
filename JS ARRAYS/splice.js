const chamada = ['Joao','Ana','Caio','Lara','Marjorie','Leo']
const chamada2 = ['Joao','Ana','Caio','Lara','Marjorie','Leo']

// pode usar sem o terceiro parametro, apenas para excluir o que quiser
let listaChamada = chamada.splice(1, 2, 'teste')
console.log(listaChamada)
console.log(chamada)

// podemos colocar elementos em qualquer posicao
chamada2.splice(2, 0, 'novoValor')
console.log(chamada2)

