function mes() {
    var mes = String(prompt("Digite o mês em extenso (ex:Setembro)"));

    var res = document.getElementById("res");
    var estação = null;
    switch (mes) {
        case 'Janeiro':
        case 'Fevereiro':
        case 'Março':
            estação = 'Verão';
            break;
        case 'Abril':
        case 'Maio':
        case 'Junho':
            estação = 'Outono';
            break;
        case 'Julho':
        case 'Agosto':
        case 'Setembro':
            estação = 'Inverno';
            break;
        case 'Outubro':
        case 'Novembro':
        case 'Dezembro':
            estação = 'Primavera';
            break;
        default:
            estação = 'INDEFINIDA'
    }
    res.innerHTML = `No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estação}</strong></mark>.`;
}
