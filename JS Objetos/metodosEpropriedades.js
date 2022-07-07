class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositoPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const renato = new ClientePoupanca(
    "Rentao",
    'renato@renato.com',
    '04185164235',
    500,
    0
)

renato.depositoPoupanca(200)
renato.depositar(20)
console.log(renato)