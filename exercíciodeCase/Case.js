const num1 = Number('Informe o primeiro número');
const num2 = Number('Informe o segundo número');
const operacao = Number('O que você deseja fazer?'+
    "\n[1] Somar\n[2] Subtrair\n[3] Multplicarr\n[4] Dividir");
    const resultado = document.querySelector('#resultado');


    function operacaoBasica(operacao){
        switch(operacao){
             case 1:
                const soma = num1 + num2;
                resultado.innerHTML += <p> ${num1} + ${num2} = ${soma} </p>;

                case 2:
                const Subtrair = num1 + num2;
                resultado.innerHTML += <p> ${num1} + ${num2} = ${Subtrair} </p>;

                case 3:
                const Multplicarr = num1 + num2;
                resultado.innerHTML += <p> ${num1} + ${num2} = ${Multplicarr} </p>;

                case 4:
                const Dividir = num1 + num2;
                resultado.innerHTML += <p> ${num1} + ${num2} = ${Dividir} </p>;
        }
    }

    
    operacaoBasica(operacao);