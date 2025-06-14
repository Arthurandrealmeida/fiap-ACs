function Primao(){
    const num=parseInt(document.getElementById("numero").value)
    let contador = num
    let i = 0

    do{
        if(num % contador == 0){
            i++

        }
        contador--

    }while(contador >0)

    if(i == 2){
        document.getElementById("resposta").innerHTML=`o numero ${num} é primo`  
    }else{
        document.getElementById("resposta").innerHTML=`este numero ${num} não é primo`  
    }  
}


function PrimaoWhile(){
    const num=parseInt(document.getElementById("numero").value)
    let contador = num
    let i = 0

    
    while(contador > 0){
        if(num % contador == 0){
            i++
        }
        contador--
    }

    if(i == 2){
        document.getElementById("resposta").innerHTML=`o numero ${num} é primo`  
    }else{
        document.getElementById("resposta").innerHTML=`este numero ${num} não é primo`  
    }  
}


function PrimaoFor(){

}