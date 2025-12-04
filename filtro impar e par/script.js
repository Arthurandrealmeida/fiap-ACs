
function verificarNumero() {
    const inputElement = document.getElementById('numeroInput');
    
    // O '+' garante que o valor seja tratado como um número.
    const numero = +inputElement.value; 
    
    const respostaElement = document.getElementById('resposta');

    let resultado;
    
    if (numero % 2 === 0) {
        resultado = `O número ${numero} é *PAR*!`;
    } else {
        resultado = `O número ${numero} é *ÍMPAR*!`;
    }

    respostaElement.innerHTML = resultado;
}

// Opcional: Adicionar um listener para o Enter para facilitar a usabilidade
document.getElementById('numeroInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verificarNumero();
    }
});