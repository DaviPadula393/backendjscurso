const num1 = Number(prompt('informe o primeiro número: '));
const num2 = Number(prompt('informe o segundo número: '));
const num3 = Number(prompt('informe o terceiro número: '));

function mediaGeometrica(num1, num2, num3){
    const media = Math.pow(num1 + num2 + num3, 1/3);
    return media;
}



console.log(mediaGeometrica( num1, num2, num3));