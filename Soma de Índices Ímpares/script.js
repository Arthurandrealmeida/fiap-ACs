
const numerosDigitados = [];
const LIMITE_NUMEROS = 5;

function adicionarNumero() {
    const inputElement = document.getElementById('numeroInput');
    const numero = parseInt(inputElement.value); 
    

    if (numerosDigitados.length >= LIMITE_NUMEROS) { 
        alert(`O limite de ${LIMITE_NUMEROS} números já foi atingido. O resultado já foi calculado!`);
        inputElement.value = ''; // Limpa o campo
        return;
    }

    numerosDigitados.push(numero);
    
    inputElement.value = ''; 
    
    // Atualiza o Status na Tela
    const statusElement = document.getElementById('status');
    statusElement.textContent = `Números digitados (${numerosDigitados.length}/${LIMITE_NUMEROS}): [${numerosDigitados.join(', ')}]`;

    if (numerosDigitados.length === LIMITE_NUMEROS) {
        // Chama a função de cálculo quando 5 números são atingidos
        calcularSomaValoresImpares();
    }
}

function calcularSomaValoresImpares() {
    let somaValoresImpares = 0;
    let elementosImpares = [];

    for (const numero of numerosDigitados) {
        
        if (numero % 2 !== 0) {
            somaValoresImpares += numero;
            elementosImpares.push(numero);
        }
    }
    
    const respostaElement = document.getElementById('resposta');
    respostaElement.innerHTML = 
        `<strong>FIM!</strong> O array completo é: [${numerosDigitados.join(', ')}]. <br>
        Os valores ímpares encontrados são: ${elementosImpares.length > 0 ? elementosImpares.join(' e ') : 'Nenhum'}. <br>
        A *SOMA* desses valores é: <strong>${somaValoresImpares}</strong>.`;

    document.querySelector('button').disabled = true;
    document.getElementById('numeroInput').disabled = true;
}