function CalculoIdade() {
  // Ano do nascimento
  var anoNascimento = parseInt(prompt("Em que ano você nasceu?"));
  // Ano do presente
  var anoAtual = 2024;
  // Resultados
  var res = document.getElementById("resultado");
  res.innerHTML = `Quem nasceu em ${anoNascimento} vai completar <strong>${
    anoAtual - anoNascimento
  }</strong> anos em ${anoAtual}.`;
}
