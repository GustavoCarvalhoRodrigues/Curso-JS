var res = document.querySelector("p#resultado");
var jogo = 0;
var jogador = 0;

function sortear() {
  var min = 1;
  var max = 100;
  var dif = max - min;
  var aleatorio = Math.random();
  jogo = min + Math.trunc(dif * aleatorio);
}

function jogar() {
  jogador = Number(prompt("Qual é o seu palpite?"));
  if (jogador < jogo) {
    res.innerHTML += `<p>Você falou ${jogador}. Meu número é <Strong>MAIOR!</Strong></p>`;
  } else if (jogador > jogo) {
    res.innerHTML += `<p>Você falou ${jogador}. Meu número é <Strong>MENOR!</Strong></p>`;
  } else if (jogador == jogo) {
    res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${jogo}!</p>`;
    document.getElementById("botao").style.visibility = "hidden";
  }
}
