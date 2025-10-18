var listaVotos = [];

function registrarVoto() {
  var votoAtual = Number(document.getElementById("voto").value);

  if (votoAtual == -1) {
    if (listaVotos.length == 0) {
      document.getElementById("resultado").innerHTML = "Nenhum voto registrado!";
      return;
    }

    var votosCandidato1 = 0;
    var votosCandidato2 = 0;
    var votosBrancos = 0;
    var votosNulos = 0;

    listaVotos.forEach(function(voto) {
      if (voto == 1) votosCandidato1++;
      else if (voto == 2) votosCandidato2++;
      else if (voto == 0) votosBrancos++;
      else votosNulos++;
    });

    var totalVotos = listaVotos.length;
    var vencedor = "";
    if (votosCandidato1 > votosCandidato2) {
      vencedor = "Candidato 1";
    } else if (votosCandidato2 > votosCandidato1) {
      vencedor = "Candidato 2";
    } else {
      vencedor = "Empate";
    }

    document.getElementById("resultado").innerHTML =
      "Candidato 1: " + votosCandidato1 +
      " | Candidato 2: " + votosCandidato2 +
      " | Branco: " + votosBrancos +
      " | Nulo: " + votosNulos +
      "<br>%Candidato 1: " + (votosCandidato1 / totalVotos * 100) +
      "% | %Candidato 2: " + (votosCandidato2 / totalVotos * 100) +
      "% | %Branco/Nulo: " + ((votosBrancos + votosNulos) / totalVotos * 100) +
      "%<br>Vencedor: " + vencedor;

  } else {
    listaVotos.push(votoAtual);
    document.getElementById("voto").value = "";
  }
}
