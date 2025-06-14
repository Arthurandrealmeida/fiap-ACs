function somaFor() {
  let n = parseInt(document.getElementById("quantidade").value);
  let somaPares = 0;
  let somaImpares = 0;
  let parAtual = 0;
  let imparAtual = 1;

  for (let i = 0; i < n; i++) {
    somaPares += parAtual;
    somaImpares += imparAtual;

    parAtual += 2;
    imparAtual += 2;
  }

    document.getElementById("resultado").innerHTML = `soma ${n} do pares ${somaPares} <br>
 Soma dos ${n} impares ${somaImpares}`;


}

function somaWhile() {
  let n = parseInt(document.getElementById("quantidade").value);
  let somaPares = 0;
  let somaImpares = 0;
  let parAtual = 0;
  let imparAtual = 1;
  let i = 0;

  while (i < n) {
    somaPares += parAtual;
    somaImpares += imparAtual;

    parAtual += 2;
    imparAtual += 2;
    i++;
  }

    document.getElementById("resultado").innerHTML = `soma ${n} do pares ${somaPares} <br>
 Soma dos ${n} impares ${somaImpares}`;


}

function somaDoWhile() {
  let n = parseInt(document.getElementById("quantidade").value);
  let somaPares = 0;
  let somaImpares = 0;
  let parAtual = 0;
  let imparAtual = 1;
  let i = 0;

  if (n > 0) {
    do {
      somaPares += parAtual;
      somaImpares += imparAtual;

      parAtual += 2;
      imparAtual += 2;
      i++;
    } while (i < n);
  }
    document.getElementById("resultado").innerHTML = `soma ${n} do pares ${somaPares} <br>
 Soma dos ${n} impares ${somaImpares}`;


}