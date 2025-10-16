alert("Bem-Vindo ao site");
let resposta = confirm("Você é um user?");
if(resposta) {
    alert("Prossiga");
} else {
    alert("Retorne");
};
let nome = prompt("Qual é seu nome?", "");
let saudacoes = "Olá " + nome;
alert(saudacoes);
console.log(saudacoes, resposta);