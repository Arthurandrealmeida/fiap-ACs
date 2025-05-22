function calcularIMC() {
      let peso = parseFloat(document.getElementById("peso").value);
      let altura = parseFloat(document.getElementById("altura").value);

      let imc = peso / (altura * altura);
      let classificacao = "";

      if (imc < 18.5) {
        classificacao = "Abaixo do peso";
      } else if (imc <= 24.9) {
        classificacao = "Peso normal";
      } else if (imc <= 29.9) {
        classificacao = "Sobrepeso";
      } else {
        classificacao = "Obesidade";
      }

      document.getElementById("resultado").innerText = 
        "IMC: " + imc.toFixed(2) + " — Classificação: " + classificacao;
    }