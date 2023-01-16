function parimpar(n) {
    return 'saida da funcao ' + n
}

console.log(parimpar(5))

//Função com parâmetros opcionais
function funcao1(n1=0, n2=0) {
    return n1 + n2
}

console.log(funcao1(3))

//Variavel que recebe como parâmetro uma funcao
let v1 = function(n) {
    return n * 2
}

console.log(v1(2))