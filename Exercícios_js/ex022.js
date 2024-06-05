function contar() {
  var res = document.getElementById("res");

  res.innerHTML += "<h2>Contando de 1 até 10, marcando os pares</h2>";

  var contador = 1;

  do {
    if (contador % 2 === 0) {
      res.innerHTML += `<mark><strong>${contador}</strong></mark> &#x1F449;`;
      contador++;
    } else {
      res.innerHTML += `${contador} &#x1F449;`;
      contador++
      /* if (contar % 2 === 0) { ... } else { ... }: Esta estrutura condicional verifica se o número atual (contar) é par ou ímpar. Se for par, é adicionado ao elemento res entre <mark> (para destacar) e <strong> (para dar ênfase). Se for ímpar, é apenas adicionado ao elemento res */
    }
  } while (contador <= 10);
  res.innerHTML += "&#x1F3C1;";
}

