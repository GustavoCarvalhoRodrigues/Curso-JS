var res = document.getElementById("resultado");
var contador = 0;

function ContadorClique() {
  contador++;
  res.innerHTML = `O contador está com <mark>${contador}</mark> cliques.`;
}

function reset() {
    var contador = 0;
    res.innerHTML = null;
}
