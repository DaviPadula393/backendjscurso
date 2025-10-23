alert("Bem Vindo(a) ao site");
let resposta = confirm("Vamos jogar um jogo?");
if(resposta) {
    alert("Se prepare");
}else{
    alert("Talvez outra hora");
};
let resultado = prompt("Diga um número","");
let resultado2 = prompt("Diga mais um","");
let resultado3 = ((resultado/2 + resultado2/2));
let conclusao = 'Seu resultado é' + resultado3;
console.log(resultado3, resposta);
alert(resultado3);