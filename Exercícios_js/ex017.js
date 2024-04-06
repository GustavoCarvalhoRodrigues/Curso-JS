function gerarNumero() {
  var min = 1;
  var max = 100;
  var diferenca = max - min;
  var aleatorio = Math.random();
  var num = min + Math.trunc(diferenca * aleatorio);

  var res = document.getElementById("resultado");
  res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`;
}

function limpou() {
  var res = document.getElementById("resultado");
  res.innerHTML = null;
}
