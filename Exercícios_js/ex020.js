function EscolhaMes() {
  var meses = String(prompt("Digite o mês em extenso (ex: Setembro) "));

  var res = document.getElementById("resultado");
  var estacao;

  switch (meses) {
    case "Janeiro":
    case "Fevereiro":
    case "Março":
      estacao = "VERÃO";
      break;
    case "Abril":
    case "Maio":
    case "Junho":
      estacao = "Outono";
      break;
    case "Julho":
    case "Agosto":
    case "Setembro":
      estacao = "Inverno";
      break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
      break;
    default:
      estacao = "INDEFINIDA";
      break;
  }
  res.innerHTML = `No mês de <mark>${meses}</mark>, estamos na estação <mark><strong>${estacao}</strong></mark>`;
}
