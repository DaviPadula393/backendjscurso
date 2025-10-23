const num1 = Number('Informe o primeiro número');
const num2 = Number('Informe o segundo número');
const operacao = Number('O que você deseja fazer?'+
    "\n[1] Somar\n[2] Subtrairr\n[3] Multplicarr\n[4] Dividir");
    const resultado = document.querySelector('#resultado');


    function operacaoBasica(operacao){
        switch(operacao){
             case 1:
                const soma = num1 + num2;
                resultado.innerHTML += <p> ${num1} + ${num2} = ${soma} </p>
        }
    }