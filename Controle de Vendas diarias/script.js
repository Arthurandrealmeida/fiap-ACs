/*var vendas = []

    function adicionarVenda() {
      var valor = Number(document.getElementById("venda").value)

      if (valor == -1) {
        var maior = Math.max(...vendas)
        var menor = Math.min(...vendas)
        var soma = 0

        vendas.forEach(v => soma += v)
        var media = soma / vendas.length

        document.getElementById("resultado").innerHTML =
          "Maior venda: " + maior + "<br>" +
          "Menor venda: " + menor + "<br>" +
          "Média das vendas: " + media
      } else {
        vendas.push(valor)
      }

    } */

var vendas = [];

function adicionarVenda() {
  var valor = Number(document.getElementById("venda").value);

  if (valor == -1) {
    var maior = vendas[0];
    var menor = vendas[0];
    var soma = 0;

    vendas.forEach(v => {
      soma += v;
      if (v > maior) maior = v;
      if (v < menor) menor = v;
    });

    var media = soma / vendas.length;

    document.getElementById("resultado").innerHTML =
      "Maior venda: " + maior + "<br>" +
      "Menor venda: " + menor + "<br>" +
      "Média das vendas: " + media;
  } else {
    vendas.push(valor);
  }
}
