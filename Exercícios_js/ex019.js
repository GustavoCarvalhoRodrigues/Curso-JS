function clique() {
  var valor_1 = Number(prompt("Primeiro valor: "));
  var valor_2 = Number(prompt("Segundo Valor:"));
  var info = Number(
    prompt(
      `Valores informados: ${valor_1} e ${valor_2}. \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`
    )
  );

  var res = document.getElementById("resultado");
  res.innerHTML = '<h2>Calculando...</h2>'

  switch (info) {
    case 1:
      var soma = valor_1 + valor_2;
      res.innerHTML += `<p>${valor_1} + ${valor_2} = <strong>${soma}</strong></p>`;
      break;
    case 2:
      var subtrair = valor_1 - valor_2;
      res.innerHTML += `<p>${valor_1} - ${valor_2} = <strong>${subtrair}</strong></p>`;
      break;
    case 3:
      var multiplique = valor_1 * valor_2;
      res.innerHTML += `<p>${valor_1} x ${valor_2} = <strong>${multiplique}</strong></p>`;
      break;
    case 4:
      var dividir = valor_1 / valor_2;
      res.innerHTML += `<p>${valor_1} / ${valor_2} = <strong>${dividir}</strong></p>`;
      break;
    default:
      res.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${valor_1} e ${valor_2}, mas não sei o que fazer com eles.</p>`;
      break
  }
}
