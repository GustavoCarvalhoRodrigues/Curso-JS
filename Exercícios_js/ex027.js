function tabcalculo() {
  var res = document.getElementById("res");
  var num = Number(document.getElementById("itab").value);

  res.innerHTML = `<h2>Tabuada de ${num}</h2>`;

  var valor = 1;
  while (valor <= 10) {
    res.innerHTML += `${num} x ${valor} = <strong>${num * valor}</strong><br>`;
    valor++;
  }
}
