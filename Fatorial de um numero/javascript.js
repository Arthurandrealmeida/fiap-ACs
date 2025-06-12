function Fatorial(){
    let num = parseInt(document.getElementById("numero").value);
    let resultado = 1
    
    for(let i=num; i>1; i--){
        resultado *= i
    }
    document.getElementById("resultado").innerHTML = `${resultado}`
}

function fatorialComWhile(){
    let num = parseInt(document.getElementById("numero").value)
    let resultado = 1 
    let i = num

    while(i>1){
        resultado *= i
        i--
    }
    document.getElementById("resultado").innerHTML=` ${resultado}`
}

function fatorialComDoWhile(){
    let num=parseInt(document.getElementById("numero").value);
    let resultado = 1;
    i = num;

    if (num === 0){
        resultado = 1
    } else {
        do {
            resultado *= i
            i--;
        } while(i>1)
    }
    document.getElementById("resultado").innerHTML = `${resultado}`
}