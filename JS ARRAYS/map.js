const notas = [10,9,8,7,6]
//                                                             nesse caso o ++ tem que vir antes
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)
console.log(notasAtualizadas)

// map retorna um array atualizado ou o calculo que for