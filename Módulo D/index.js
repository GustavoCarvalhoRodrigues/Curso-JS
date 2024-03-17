function carregar() {
  // Hora atual
  var data = new Date();
  var hora = data.getHours();
  // Texto a ser mostrado as horas
  var titulo = document.getElementsByTagName("h3")[0];
  // Imagem
  var imagem = document.querySelector("img");
  // Condição da manhã, tarde e noite
  if (hora >= 0 && hora < 12) {
    imagem.src = "imagem_Bom dia.jpg";
    titulo.innerHTML = `Agora são ${hora} horas.`;
    document.body.style.backgroundColor = "rgba(222, 184, 135, 0.658)";
  } else if (hora > 12 && hora < 18) {
    imagem.src = "imagem_Boa tarde.jpg";
    titulo.innerHTML = `Agora são ${hora} horas.`;
    document.body.style.backgroundColor = "rgba(255, 255, 0, 0.486)";
  } else {
    imagem.src = "imagem_Boa noite.jpg";
    titulo.innerHTML = `Agora são ${hora} horas.`;
    document.body.style.backgroundColor = "brown";
  }
}
