function ParOuImpar() {
  var num = Number(prompt("Digite um número:"));
  var res = document.getElementById("res");
  if (num % 2 == 0) {
    res.innerHTML = `O número ${num} que foi digitado é <strong>PAR!</strong>`;
  } else {
    res.innerHTML = `O número ${num} que foi digitado é <strong>ÍMPAR!</strong>`;
  }
}
