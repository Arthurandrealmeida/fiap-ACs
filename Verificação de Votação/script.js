function verificarVoto() {
    if (parseInt(document.getElementById("idade").value) >= 16) 
        {
            if (document.getElementById("nacionalidade").value === "sim") {
                alert("Você pode votar nas eleições.");
            } else {
                alert("Você não pode votar nas eleições, pois não é brasileiro.");
            }
        } 
            
            else 
            {
                alert("Você não pode votar nas eleições, pois não tem idade suficiente.");
            }
}