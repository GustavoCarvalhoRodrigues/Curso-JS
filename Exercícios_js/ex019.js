function clicou() {
    var num_1 = Number(prompt("Primeiro valor:"));
    var num_2 = Number(prompt("Segundo valor:"));
    var escolha = Number.parseInt(
        prompt(`Valores informados ${num_1} e ${num_2}. \n O que vamos fazer? \n [1] Somar \n [2] Subtrair \n [3] Multiplicar \n [4] Dividir`)
    );

    var res = document.getElementById('res');
    res.innerHTML = '<h1>Calculando...</h1>'

    switch (escolha) {
        case 1:
            res.innerHTML += `${num_1} + ${num_2} = <strong>${num_1 + num_2
                }</strong>`;
            break;
        case 2:
            res.innerHTML += `${num_1} - ${num_2} = <strong>${num_1 - num_2
                }</strong>`;
            break;
        case 3:
            res.innerHTML += `${num_1} x ${num_2} = <strong>${num_1 * num_2
                }</strong>`;
            break;
        case 4:
            res.innerHTML += `${num_1} / ${num_2} = <strong>${num_1 / num_2
                }</strong>`;
            break;
        default:
            res.innerHTML += `OPÇÃO INVÁLIDA! Você digitou ${num_1} e ${num_2}, mas não sei o que fazer com eles.`;
    }
}
