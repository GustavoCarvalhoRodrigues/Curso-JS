function somando() {
    var res = document.getElementById("res");
    var num_1 = Number(prompt("Digite um número:"));
    var num_2 = Number(prompt("Digite outro número:"));
    res.innerHTML = `A soma entre <mark>${num_1}</mark> e <mark>${num_2}</mark> é igual a <strong>${num_1 + num_2}!</strong>`;
}
