function Analisando() {
  // Todos os mêses
  var meses = new Array(
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez"
  );
  // Todos dias da semana
  var semana = new Array("Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb");
  // As datas e horas do sistema
  var data = new Date();
  var dia = data.getDate();
  var mes = data.getMonth();
  var Ano = data.getFullYear();
  var DiaSemana = data.getDay();
  var Hora = data.getHours();
  var minutos = data.getMinutes();
  var segundos = data.getSeconds();

  var res = document.getElementById("resultado");
  // Resultados
  res.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`;
  res.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`;
  res.innerHTML += `<p>Ano: <mark>${Ano}</mark></p>`;
  res.innerHTML += `<p>Dia da Semana: <mark>${semana[DiaSemana]}</mark></p>`;
  res.innerHTML += `<p>Hora: <mark>${Hora}</mark></p>`;
  res.innerHTML += `<p>Minutos: <mark>${minutos}</mark></p>`;
  res.innerHTML += `<p>Segundos: <mark>${segundos}</mark></p>`;
}
