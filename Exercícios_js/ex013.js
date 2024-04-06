var res = document.getElementById("resultado");

function MaiorValor() {
  // Primeiro número
  var num_1 = Number(prompt("Digite um número: "));
  // Segundo número
  var num_2 = Number(prompt("Digite outro número:"));
  // Condição mostrando qual o maior valor
  if (num_1 > num_2) {
    res.innerHTML = `<p>Analisando os valores <mark>${num_1}</mark> e <mark>${num_2}</mark>, o maior valor é <strong>${num_1}</strong></p>`;
  } else if (num_1 < num_2) {
    res.innerHTML = `<p>Analisando os valores <mark>${num_1}</mark> e <mark>${num_2}</mark>, o maior valor é <strong>${num_2}</strong></p>`;
  } else {
    res.innerHTML = `<p>Analisando os valores <mark>${num_1}</mark> e <mark>${num_2}</mark>, ambos são <strong>IGUAIS</strong></p>`;
  }
}
