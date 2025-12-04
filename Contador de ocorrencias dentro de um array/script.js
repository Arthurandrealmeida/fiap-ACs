const numeros = [3, 7, 3, 1, 9, 3, 4, 7, 3, 2];

const valor = Number(prompt("Digite um número:"));

const ocorrencias = numeros.filter(n => n === valor).length;

console.log(`O número ${valor} aparece ${ocorrencias} vezes.`);