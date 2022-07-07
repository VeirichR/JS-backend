const cliente = {
    nome: 'Renato',
    idade: 27,
    cpf: "2516413546135",
    email: 'renato@renato.com'
}

const chaves = ["nome", "idade", "cpf", "email"]
console.log(cliente[chaves[0]])

const chave = ["idade"]
console.log(cliente[chave])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente['email'])
console.log(cliente['conta']) //undefined