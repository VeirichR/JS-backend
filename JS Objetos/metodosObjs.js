cliente = {
    nome: 'Renato',
    idade: 27,
    cpf: '2516413546135',
    email: 'renato@renato.com',
    fones: [ '123456789', '987654321', '654321987' ],
    dependentes: [
      { nome: 'Barbara', 
      parentesco: 'Companheira', 
      nasc: '21/10/1990' },
      { nome: 'Kaia', 
      parentesco: 'filha', 
      nasc: '21/10/2024' }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
  }
  
function ofereceSeguro(obj){
    const propriedadesClientes = Object.keys(cliente)
    //includes verifica se o valor esta contido
    if(propriedadesClientes.includes("dependentes")){
        console.log(`Oferta de seguro para ${obj.nome}`)
    }
}
console.log(Object.values(cliente))
console.log(Object.entries(cliente))
ofereceSeguro(cliente)