function fatorial() {
    var res = document.getElementById("res");
    var fator = Number(document.getElementById("ifat").value);

    res.innerHTML += `<h2>Calculando ${fator}!</h2>`;
    var contador = fator
    var num = 1;
    while (contador > 1) {
        res.innerHTML += `${contador} x `;
        num *= contador
        contador--;
    }
     res.innerHTML += `1 = <strong>${num.toLocaleString("pt-BR")}</strong>`;
}
