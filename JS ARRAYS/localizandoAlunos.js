const alunos = ["joao", "Juliana", "Kaio", "Ana"]
const mediaAlunos = [10,7,8,9,6]
let listaDuasDimensoes = [alunos, mediaAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDuasDimensoes[0].includes(nomeDoAluno)){
        let indice = listaDuasDimensoes[0].indexOf(nomeDoAluno)
        return listaDuasDimensoes[0][indice] + ', sua media eh ' + listaDuasDimensoes[1][indice]
    }
    else{
        return 'Aluno nao foi encontrado!'
    }
}

console.log(exibeNomeNota('Ana'))