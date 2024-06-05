function valor() {
  var num_1 = Number(prompt("Digite um número: "));
  var num_2 = Number(prompt("Digite outro número: "));
  var res = document.getElementById("res");
  if (num_1 > num_2) {
    res.innerHTML = `Analisando os valores <mark>${num_1}</mark> e <mark>${num_2}</mark>, o maior valor é <strong>${num_1}</strong>`;
  } else {
    res.innerHTML = `Analisando os valores <mark>${num_1}</mark> e <mark>${num_2}</mark>, o maior valor é <strong>${num_2}</strong>`;
  }
}
