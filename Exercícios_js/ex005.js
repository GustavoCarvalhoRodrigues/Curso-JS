alert("Seja bem-vindo(a) ao meu site!");

function clicou() {
    var resultado = document.getElementById("res");
    var num = Number(prompt("Digite um número:"));
    resultado.innerHTML = `O dobro de ${num} é ${num * 2} e a metade é ${num / 2}!`;
}
