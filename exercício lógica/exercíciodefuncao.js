function verificarIdade(idade){
    if (idade => 18){
        return 'Maior de idade';
    }else{
        return 'Menor de idade';
    }
}
console.log(verificarIdade(20));


// visão do professor 

/*const numero = 10;

function veridicarNumero(numero){
    if (numero === 0) return 'O número' ;{numero} 'é zero';
    if (numero > 0) return 'O número' ;{numero} 'positivo';
    return 'O número' ;{numero} 'é negativo'
}


console.log(veridicarNumero(10)); 
console.log(veridicarNumero(6)); 
console.log(veridicarNumero(0));*/

function parOuImpar(numero){
    if (numero === 0){
        return('Número é 0(Zero)');
    }else if(numero % 2===0){
        return('Número é par');
    }else{
        return('Número é impar');
    }
}

console.log(parOuImpar(11));
console.log(parOuImpar(20));
console.log(parOuImpar(0));
console.log(parOuImpar("0"));