class Pessoa{
    constructor(nome, sobrenome, cpf, email){
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.email = email
    }

    exibirNomeCompleto(){
        console.log(this.nome + " " + this.sobrenome)
    }
}

// heranca
class Programador extends Pessoa{
    constructor(nome, sobrenome, cpf, email, linguagem){
        super(nome, linguagem, cpf,email) 
        // chamando o construtor da pessoa para dentro de programador
        this.linguagem = linguagem
    }
}

// instanciando um obj
const novoDev = new Programador("renato", "Veirich", "renato@renato.com", "JS")
console.log(novoDev.nome)

// por baixo dos panos o JS transforma todas as classes
// em funcoes. sintetic sugar**

