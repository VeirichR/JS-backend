class Cliente{
    constructor(nome, email, cpf, saldo){
        //atributos
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    //metodos
    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(`saldo R$${this.saldo}`)
    }
}

const renato = new Cliente("Renato", "renato@renato.com", "1235648946", 500)

console.log(renato)
renato.exibirSaldo()

// funcao externa a classe, nao acoplada 
function imprimeNomeEmail1(){
    console.log(`${this.nome}  - ${this.email}`)
}

const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail1
}
pessoa1.imprimeInfo()

//call()
/*Esse método permite que uma função seja chamada com 
parâmetros e valor de this específicos. Vamos ver 
um exemplo:*/
function imprimeNomeEmail2(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
    
   }
   
const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
}
imprimeNomeEmail2.call(cliente1, "cliente especial")
/*O primeiro parâmetro do método call() se refere ao objeto que será usado 
    como contexto do this e, do segundo parâmetro em diante, são passados os 
    argumentos que a função deve receber. No caso acima, há somente um parâmetro, 
    a string tipoCliente.*/

/*apply()
O método apply() funciona de forma muito semelhante ao call(), porém recebe os 
argumentos em um array ao invés de separados: */
function imprimeNomeEmail3(tipoCliente, agencia){
    console.log(`
      ${tipoCliente} da agência ${agencia}:
      - nome: ${this.nome}, email: ${this.email}
      `)
   }
   
const cliente3 = {
    nome: "Pedro",
    email: "cr@email.com"
}
/*Chamando imprimeNomeEmail com o método apply() e passando um array de dados 
como segundo parâmetro (lembrando que o primeiro parâmetro de apply() se refere 
ao contexto de this, igual ao método call():*/
const clienteEspecial = ["cliente especial", "Rio de Janeiro"]

imprimeNomeEmail3.apply(cliente1, clienteEspecial)
/**Utilize o método apply() caso você tenha um array de dados e o call() para 
 * passar valores individuais como parâmetro. Lembre-se que o array deve seguir 
 * a ordem correta dos parâmetros informado na função. */

/*bind()
O método bind() “prende” ou “liga” uma função ao contexto de um objeto. 
Por exemplo:*/
 
const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){return `a personagem é ${this.nome}`}
}
/*O objeto acima contém uma propriedade nome e um método apresentar que retorna 
um string com nome; this.nome liga a propriedade nome ao contexto do objeto em 
que a função está definida, ou seja, “este objeto”.

Vamos ver o que acontece se tentarmos executar essa função a partir de outro 
contexto:*/

const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())
//a personagem é undefined

/*Quando atribuímos apresentar() à variável personagemGenerico estamos retirando 
a função apresentar() do contexto do objeto na qual foi criada, e por isso this 
não está mais acessível; a função perdeu a referência original e não consegue 
mais localizar onde está this.

Ressolvemos este problema com bind():*/

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())
//a personagem é Princesa LeiaCOPIAR CÓDIGO

/*Acima, utilizamos o método bind() para “ligar” a função que atribuímos a 
personagemGenerico ao objeto personagem. Assim, sempre que esta função for 
executada a partir da variável personagemDefinido, a função original vai usar 
o objeto personagem como contexto de execução. Dessa forma, this sempre se refere 
ao objeto personagem e é capaz de acessar suas propriedades.*/