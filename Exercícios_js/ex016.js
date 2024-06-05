function iniciar() {
  var anoAtual = 2024;
  var anoNascimento = Number.parseInt(prompt("Em que ano você nasceu? "));
  var res = document.getElementById("res");
  res.innerHTML = `Quem nasceu em ${anoNascimento} vai completar <strong>${
    anoAtual - anoNascimento
  }</strong> anos em ${anoAtual}.`;
}
