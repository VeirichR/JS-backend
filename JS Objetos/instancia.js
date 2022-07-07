function Cliente(nome, cpf, email, saldo){
    this.nome = nome,
    this.cpf = cpf,
    this.email = email,
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const renato = new Cliente(
    "Renato", 
    "04191635274",
    "renato@renato.com",
    200)

console.log(renato)

// __proto__ para ver o que acontece dentro dos prototipos do JS
// para ver tudo tem que ser pelo navegador