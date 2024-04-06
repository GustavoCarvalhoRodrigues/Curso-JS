var res = document.getElementById("resultado");

function parOUímpar() {
  // Número digitado
  var num = Number(prompt("Digite um número:"));
  // Condição sendo par ou ímpar
  if (num % 2 == 0) {
    res.innerHTML = `O número ${num} que foi digitado é <strong>PAR!</strong>`;
  } else {
    res.innerHTML = `O número ${num} que foi digitado é <strong>ÍMPAR!</strong>`;
  }
}
