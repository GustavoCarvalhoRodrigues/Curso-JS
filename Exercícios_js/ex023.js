function contando() {
  var res = document.getElementById('res');

  res.innerHTML += '<h2>Números pares de 1 até 10</h2>'

  var contador = 2;

  while (contador <= 10) {
      res.innerHTML += `${contador} &#x1F449;`;
      contador += 2
  }
  res.innerHTML += `&#x1F3C1;`;
}