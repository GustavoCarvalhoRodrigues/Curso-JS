var res = document.getElementById("resultado");

function CalcularMédia() {
  // Nome do aluno
  var nome = String(prompt("Qual é o nome do aluno?"));
  // Primeira nota
  var nota_1 = parseFloat(prompt(`Qual foi a primeira nota de ${nome}?`));
  // Segunda nota
  var nota_2 = parseFloat(
    prompt(`Além de ${nota_1}, qual foi a outra nota de ${nome}?`)
  );
  // Resultados
  res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`;

  res.innerHTML += `<p>As notas obtidas foram <mark>${nota_1} e ${nota_2}</mark>.</p>`;

  res.innerHTML += `<p>A média final será <mark>${
    (nota_1 + nota_2) / 2
  }</mark>.</p>`;

  res.innerHTML +=
    '<p>A mensagem que temos é: <strong style="color: red">Meus parabéns!</strong></p>';
}
