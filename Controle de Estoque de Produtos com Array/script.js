 produtos = []
 quantidades = []

function adicionar() {
   produto = document.getElementById("produto").value
   quantidade = Number(document.getElementById("quantidade").value)

  if (produto == "-1") {
     totalProdutos = produtos.length
     maior = quantidades[0]
     produtoMais = ""
     totalItens = 0

    quantidades.forEach((q, posicao) => {
      totalItens += q
      if (q > maior) {
        maior = q
        produtoMais = produtos[posicao]
      }
    })

    document.getElementById("resultado").innerHTML =
      "Total de produtos inseridos: " + totalProdutos + "<br>" +
      "Quantidade total de itens no estoque: " + totalItens + "<br>" +
      "Produto com maior quantidade: " + produtoMais + " (" + maior + ")"
  } else {
    produtos.push(produto)
    quantidades.push(quantidade)
  }

  document.getElementById("produto").value = ""
  document.getElementById("quantidade").value = ""
}

function consultarProduto() {
   nomeConsulta = document.getElementById("consulta").value
   total = 0;

  produtos.forEach((produtoAtual, posicao) => {
    if (produtoAtual == nomeConsulta) total += quantidades[posicao]
  })

  document.getElementById("quantidadeDoProduto").innerHTML =
    "Quantidade de " + nomeConsulta + ": " + total
}
