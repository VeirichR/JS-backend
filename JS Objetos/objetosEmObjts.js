const cliente = {
    nome: 'Renato',
    idade: 27,
    cpf: "2516413546135",
    email: 'renato@renato.com',
    fones: ["123456789", "987654321", "654321987"]
}

cliente.dependente = {
    nome: "Barbara",
    parentesco: "Companheira",
    nasc: "21/10/1990"
}

console.log(cliente)
console.log(cliente.dependente.nome)
cliente.dependente.nome = "Barbara Borba"
console.log(cliente.dependente.nome)