function contando() {
    var res = document.getElementById("res");
    var valor = document.getElementById("valor");

    var num = 0;
    res.innerHTML += `<h2>Contando de 0 até ${valor.value}</h2>`;
    do {
        res.innerHTML += `${num} &#x1F449;`;
        num++;
    } while (num <= valor.value);
    res.innerHTML += "&#x1F3C1;";
}
