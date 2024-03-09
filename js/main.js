 // Adiciona um listener para detectar clique no botão calcular
document.querySelector('#calcular').addEventListener('click', calcular);

function calcular() {
    let num = Number(document.querySelector('#numero').value);
    let fib = [0,1,1];
    let valorAtual = 0;
    let res = document.querySelector('#res');
     // Apaga o resultado anterior
    res.innerHTML = '';

    // Verifica se o campo está vazio
    if (document.querySelector('#numero').value == '') {
        alert('Preencha o campo abaixo para gerar o resultado');
        res.style.display = 'none';
    }
    else {
        // Calcula a sequência até valorAtual ser maior ou igual à num
        for (let i = 3; valorAtual <= num; i++) {
            fib.push(fib[i-1] + fib[i-2]);
            valorAtual = fib[i];
        }
    
        res.style.display = 'block';
        
        // Exibe na tela se num digitado pertence ou não à sequência
        fib.includes(num) ? res.innerHTML += `${num} pertence à sequência de Fibonacci`
        : res.innerHTML += `${num} não pertence à sequência de Fibonacci`;
    }
}