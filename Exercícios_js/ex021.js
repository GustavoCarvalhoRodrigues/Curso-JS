function contar() {
  var res = document.getElementById("res");

  res.innerHTML += "<h2>Contando de 1 até 10</h2>";
  var contador = 1;
  while (contador <= 10) {
    res.innerHTML += `${contador} &#x1F449;`;
    contador++;
  }
  res.innerHTML += "&#x1F3C1;";
}

/* Podemos fazer dessa jeito também: 

function contar() {
    var res = document.getElementById("res");

    res.innerHTML += "<h1>Contando de 1 até 10</h1>";

    var contador = 1;

 do {
      res.innerHTML += `${contador} &#x1F449;`;
      contador++;
    } while (contador <= 10)
    res.innerHTML += "&#x1F3C1;";
}

} */
