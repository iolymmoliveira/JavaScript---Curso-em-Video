let num = [5,8,2,9,3]
num[5]=4 // adiciona um elemento na posição solicitada
console.log(num)

num.push(7) // adiciona um elemento na ultima posição do array
console.log(num)

console.log(`O elemento 8 está na posição ${num.indexOf(8)}.`) //

num.length // mostra o número de elementos do array
console.log(`O array possui ${num.length} posições.`)

num.sort() //ordena os elementos do vetor do < para o >
console.log(num)

console.log(`O primeiro elemento do array é o ${num[0]}.`)


