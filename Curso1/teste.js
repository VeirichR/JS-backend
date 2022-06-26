const nome = (pessoa) => {
    return `${pessoa} logou com sucesso`
}

const usuarioLogin = (pessoa) => {
    let array = []
    for (let i=0; i<10; i++){
        array.push(i)
    }
    return(nome(pessoa))
}

console.log(usuarioLogin('Renato'))