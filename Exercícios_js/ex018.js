var res = document.getElementById("res");
var jogador = 0;
var jogo = 0;

function carregar() {
    var min = 1;
    var max = 100;
    var diferença = max - min;
    var aleatorio = Math.random();
    jogo = min + Math.trunc(diferença * aleatorio);
}

function adivinhe() {
    jogador = Number.parseInt(prompt("Qual é o seu palpite?"));

    if (jogador < jogo) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR!</strong></p>`;
    } else if (jogador > jogo) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR!</strong></p>`;
    } else if (jogador == jogo) {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${jogador}!</p>`;
        var botao = (document.querySelector("button#botao").style.visibility =
            "hidden");
    }
}
