function contagem() {
  var valor_inicio = Number(document.getElementById("valor-inicio").value);
  var valor_fim = Number(document.getElementById("valor-fim").value);
  var res = document.getElementById("res");
  var contador = null;

    res.innerHTML = `<h2>Contando de ${valor_inicio} até ${valor_fim}</h2>`

  if (valor_inicio < valor_fim) {
    contador = valor_inicio;
    while (contador <= valor_fim) {
      res.innerHTML += `${contador} &#x1F449;`;
      contador++;
    }
  } else if (valor_inicio > valor_fim) {
    contador = valor_inicio;
    while (contador >= valor_fim) {
      res.innerHTML += `${contador} &#x1F449;`;
      contador--;
    }
  } else {
    res.innerHTML +=
      "Não é possível contar, pois os números são iguais";
  }
  res.innerHTML += "&#x1F3C1;";
}
