let num = [] //O let é um tipo mais novo do JavaScript

for (let i=0; i<=10; i++) {
    num[i] = Number(i)
}

console.log(num)

num.push(0) //Acrescentar um elemento na última posição

console.log(num)

console.log(num.length) //O length serve para saber o tamanho do array

num.sort() //O .sort() serve para colocar todos os elementos em ordem crescente

console.log(num)

//For otimizado para vetores
for (let i in num) {
    console.log(num[i])
}

//Comando para buscar um valor dentro de um vetor
console.log("Valor buscado na posição 7: " + num.indexOf(7))