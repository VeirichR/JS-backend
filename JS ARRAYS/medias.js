const notas = [10, 6.5, 8, 7.5]

let media = (notas) => {
    let soma = 0
    for(i in notas){
        soma += notas[i]
    }
return soma / notas.length
}

console.log(media(notas))