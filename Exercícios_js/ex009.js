var res = document.getElementById('res');
var contador = 0;

function adicionou() {
    contador ++
    res.innerHTML = `O contador está com <mark>${contador}</mark> cliques.`
}

function removeu() {
    res.innerHTML = null
}