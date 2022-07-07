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

let relatorio = ""

for(let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    }
    else{
        //relatorio += `${info} ${cliente[info]}\n`
        // template string aceita espaco e quebra de linha
        relatorio += `
        ${info} ${cliente[info]}
        `
    }
}

console.log(relatorio)