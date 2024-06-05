function contagemRegressiva() {
    var res = document.getElementById('res');

    res.innerHTML += "<h2>Contagem Regressiva de 10 a 1</h2>"

    var num = 10;

    while (num >= 1) {
        res.innerHTML += `${num} &#x1F449;`;
        num --
    }
    res.innerHTML += `&#x1F3C1;`;
}