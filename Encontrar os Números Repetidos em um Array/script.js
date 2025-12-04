const numeros = [2, 5, 7, 2, 9, 5, 3, 8, 5, 7];

const repetidos = [...new Set(
  numeros.filter((num, index) => numeros.indexOf(num) !== index)
)];

console.log(repetidos);
