const cliente = {
    nome: 'Renato',
    idade: 27,
    cpf: '2516413546135',
    email: 'renato@renato.com',
    fones: [ '123456789', '987654321', '654321987' ],
    dependentes: [{ nome: 'Barbara', parentesco: 'Companheira', nasc: '21/10/1990' }]
  }

cliente.dependentes.push({
    nome: "Kaia",
    parentesco: 'filha',
    nasc: '21/10/2024'
})

console.log(cliente)
/*{
  nome: 'Renato',
  idade: 27,
  cpf: '2516413546135',
  email: 'renato@renato.com',
  fones: [ '123456789', '987654321', '654321987' ],
  dependente: [
    { nome: 'Barbara', parentesco: 'Companheira', nasc: '21/10/1990' },
    { nome: 'Kaia', parentesco: 'filha', nasc: '21/10/2024' }
  ]
}*/
// filter retorna um array
const filhaMaisNova = cliente.dependentes.filter(
    dependente => dependente.nasc==="21/10/2024")
console.log(filhaMaisNova)
console.log(`filha mais nova ${filhaMaisNova[0].nome}`)