function calcularPreco() {
  var tipoCarro = document.getElementById("tipoCarro").value;
  var distanciaKm = parseFloat(document.getElementById("distanciaKm").value);
  var diaSemana = parseInt(document.getElementById("diaSemana").value);
  var hora = parseFloat(document.getElementById("hora").value);
  let precoPorKm;


  if (tipoCarro == "Comum") {
    precoPorKm = 2.5;
  } else if (tipoCarro == "Premium") {
    precoPorKm = 4.5;
  } else if (tipoCarro == "VIP") {
    precoPorKm = 7.8;
  }
  


  var precoBase = precoPorKm * distanciaKm;
  var precoFinal = precoBase;

  if (hora >= 0 && hora < 6) {
    precoFinal = precoFinal * 1.20;
  }

  if ((diaSemana >= 1 && diaSemana <= 5) && ((hora >= 6 && hora < 10) || (hora >= 17 && hora < 20))) {
    precoFinal = precoFinal * 1.15;
  }

  if (diaSemana == 0 && hora >= 15 && hora < 17) {
    precoFinal = precoFinal * 0.90; //desconto
  }

  if (distanciaKm > 100) {
    precoFinal = precoFinal + 50;
  }

  document.getElementById("resultado").innerText = "Preço total da viagem: R$ " + precoFinal;
}