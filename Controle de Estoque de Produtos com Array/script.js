var produtos = []
var quantidades = []

function adicionar() {
  var produto = document.getElementById('produto').value
  var quantidade = Number(document.getElementById('quantidade').value)

  if (produto == "-1") {
    var totalProdutos = produtos.length
    var maior = quantidades[0]
    var produtoMais = produtos[0]
    var i = 0

    while (i < produtos.length) {
      if (quantidades[i] > maior) {
        maior = quantidades[i]
        produtoMais = produtos[i]
      }
      i++
    }

    document.getElementById('resultado').innerHTML =
      "Total de produtos: " + totalProdutos + "<br>" +
      "Produto com maior quantidade: " + produtoMais + " (" + maior + ")"
  } else if (produto != "" && quantidade > 0) {
    produtos.push(produto)
    quantidades.push(quantidade)
  }

  document.getElementById('produto').value = ""
  document.getElementById('quantidade').value = ""
}

function consultarProduto() {
  var nomeConsulta = document.getElementById('consulta').value
  var total = 0, i = 0

  while (i < produtos.length) {
    if (produtos[i] == nomeConsulta) total += quantidades[i]
    i++
  }

  document.getElementById('quantidadeDoProduto').innerHTML =
    "Quantidade de " + nomeConsulta + ": " + total
}
