let valores = [8,1,5,7,9,3,2]

/*for (let pos=0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o elemento ${valores[pos]}.`)
}*/

for (let pos in valores){
    console.log(`A posição ${pos} tem o elemento ${valores[pos]}.`)
} //Forma simplificada de mostrar as posições de um array com o for

console.log(`O elemento 7 está na posição ${valores.indexOf(7)}.`) //