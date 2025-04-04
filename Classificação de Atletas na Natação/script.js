function classificarAtleta() {
    
    var idade = parseInt(document.getElementById("idade").value);

    
    if (idade < 0) {
        alert("Idade inválida! Por favor, insira uma idade positiva.");
    } else if (idade <= 7) {
        alert("Classificação: Mirim");
    } else if (idade >= 8 && idade <= 10) {
        alert("Classificação: Infantil");
    } else if (idade >= 11 && idade <= 13) {
        alert("Classificação: Juvenil A");
    } else if (idade >= 14 && idade <= 17) {
        alert("Classificação: Juvenil B");
    } else if (idade >= 18 && idade <= 55) {
        alert("Classificação: Adulto");
    }
    else {
        alert("classificação: Idoso");
    }
}