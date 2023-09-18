function calcular(){
    var inicio = parseInt(document.querySelector('input#txtinicio').value);
    var fim = parseInt(document.querySelector('input#txtfim').value);
    var passo = parseInt(document.querySelector('input#txtpasso').value);
    var i;
    var resultado ='';

        if (isNaN(inicio) || isNaN(fim)) {
            alert("Por favor, insira valores numéricos válidos para Início e Fim.");
            return;
        }

        if (isNaN(passo) || passo === 0 || passo === '') {
            alert("Valor Passo inválido. Será considerado passo 1.");
            passo = 1;
        }

        if (inicio < fim) {
            for (i = inicio; i <= fim; i += passo) {
                resultado += i;
                if (i !== fim) {
                    resultado += ', ';
                }
            }
        } else if (inicio > fim) {
            for (i = inicio; i >= fim; i -= passo) {
                resultado += i;
                if (i !== fim) {
                    resultado += ', ';
                }
            }
        } else {
            resultado = inicio.toString();
        }
        
        document.querySelector('#resultado').textContent = `${resultado}`;
}