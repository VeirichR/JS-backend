const cliente = {
    nome: 'Renato',
    idade: 27,
    cpf: "2516413546135",
    email: 'renato@renato.com'
}
console.log(cliente)

cliente.fone = "996717158"
console.log(cliente)

cliente.fone = "88855544858"
console.log(cliente)

delete cliente.fone
// deleta a chave e o valor
console.log(cliente) //undefined
