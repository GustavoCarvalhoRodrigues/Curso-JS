function carregar() {
  var horas = new Date();
  var horasAtual = horas.getHours();

  var resultado = document.getElementById("res");

  var img = document.getElementById("imagem");

  if (horasAtual >= 0 && horasAtual < 12) {
    resultado.innerHTML = `<p>Agora são ${horasAtual} horas.</p>`;
  } else if (horasAtual >= 12 && horasAtual < 19) {
    img.src = "imagem_Boa tarde.jpg";
    resultado.innerHTML = `<p>Agora são ${horasAtual} horas.</p>`;
    document.body.style.backgroundColor = "rgb(217, 121, 59)";
  } else {
    img.src = "imagem_Boa noite.jpg";
    resultado.innerHTML = `<p>Agora são ${horasAtual} horas.</p>`;
    document.body.style.backgroundColor = "rgb(140, 90, 53)";
  }
}
