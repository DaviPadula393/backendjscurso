// atividade de lógica
const nota = 5;
const nota2 = 7;
const nota3 = 4;
const nota4 = 10;
let media = (nota + nota2 + nota3 + nota4) / 4;
console.log(media)


if (media >= 7){
    console.log('Aprovado');
}else if (media <= 5 && media <=7){
    console.log('Reprovado');
}else{
    console.log('Recuperação');
}