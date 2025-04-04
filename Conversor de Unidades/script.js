function converterUnidades() {
            
    var quantidade = parseFloat(document.getElementById("quantidade").value);
    var origem = document.getElementById("unidade_origem").value;
    var destino = document.getElementById("unidade_destino").value;

    var resultado;

    
    if (origem === "cm") {
        if (destino === "m") {
            resultado = quantidade / 100;
        } else if (destino === "km") {
            resultado = quantidade / 100000;
        } else {
            resultado = quantidade;
        }   
    } 
        else if (origem === "m") {
        if (destino === "cm") {
            resultado = quantidade * 100;
        } else if (destino === "km") {
            resultado = quantidade / 1000;
        } else {
            resultado = quantidade;
        }   
    } 

        else if (origem === "km") {
        if (destino === "cm") {
            resultado = quantidade * 100000;
        } else if (destino === "m") {
            resultado = quantidade * 1000;
        } else {
            resultado = quantidade;
        } 
    }

    
    alert("Resultado: " + resultado + " " + destino);
}