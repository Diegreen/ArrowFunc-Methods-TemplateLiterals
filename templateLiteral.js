const minhaFuncao  = (nome = 'Default') => {
    console.log(`Ola, ${nome}`)
}

minhaFuncao('Paulo')

const calcular = (largura = 5, altura = 2) => {
    return largura * altura
}

console.log(calcular(5, 50))