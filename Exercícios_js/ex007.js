function calculo() {
    var res = document.getElementById('res')
    var nome = String(prompt('Qual é o nome do aluno?'))
    var nota_1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`))
    var nota_2 = Number(prompt(`Além de ${nota_1}, qual foi a outra nota de ${nome}?`));
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota_1} e ${nota_2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${(nota_1 + nota_2) / 2}</mark>.</p>`
}