function clicou() {
  var resultado = document.getElementById("res");
  var nome = String(prompt("Qual é o seu nome?"));
  resultado.innerHTML = `Olá, <strong>${nome}</strong>! É um grande prazer te conhecer! &#x1F596;`;
}
