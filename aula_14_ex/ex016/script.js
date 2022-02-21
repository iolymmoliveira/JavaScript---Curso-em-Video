function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //window.alert ('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando... <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p<=0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p=1
        }
        if(i<f){
            //Contagem Crescente
           for (var cont=i; cont<=f; cont+=p ){
            res.innerHTML += ` ${cont} \u{1F449}`
            }     
        }else{
            //Contagem Decrescente
            for (var cont=i; cont>=f; cont-=p){
                res.innerHTML += ` ${cont} \u{1F449}`
            }
        } 
        res.innerHTML += `\u{1F3C1}` 
    }   
}
