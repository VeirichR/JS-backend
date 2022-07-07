const clientes = [{
        nome: 'Renato',
        cpf: '2516413546135',
        dependentes: [
          { nome: 'Barbara', 
          parentesco: 'Companheira', 
          nasc: '21/10/1990' },
          { nome: 'Kaia', 
          parentesco: 'filha', 
          nasc: '21/10/2024' }
        ]},{
        nome: 'Mari',
        cpf: '2516413546135',
        dependentes: [
          { nome: 'Theo', 
          parentesco: 'Filho', 
          nasc: '21/10/1990' },
          { nome: 'Nena', 
          parentesco: 'Filha', 
          nasc: '21/10/2024' }
        ]},
    ]
// ... operador de espalhamento
// ele 'espalhou' os valores passados dentro de um unico array
const listaDependentes = [
    ...clientes[0].dependentes, 
    ...clientes[1].dependentes]

console.log(listaDependentes)
console.table(listaDependentes)
/*Importante! Vale notar que, caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave. Por exemplo: */
//Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas.