function verificou() {
  var agora = new Date();
  var anoAtual = agora.getFullYear();

  var nascimento = document.getElementById("nasc");
  var res = document.getElementById("resultado");

  if (nascimento.value.length == 0 || Number(nascimento.value) > anoAtual) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var sexo = document.getElementsByName("radsex");
    var idade = anoAtual - Number(nascimento.value);
    var genero = null;
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (sexo[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "foto-bebe-m.jpg");
      } else if (idade < 21) {
        img.setAttribute("src", "foto-homem-jovem.jpg");
      } else if (idade < 60) {
        img.setAttribute("src", "foto-homem-adulto.jpg");
      } else {
        img.setAttribute("src", "foto-homem-idoso.jpg");
      }
    } else if (sexo[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "foto-bebe-f.jpg");
      } else if (idade < 21) {
        img.setAttribute("src", "foto-mulher-jovem.jpg");
      } else if (idade < 60) {
        img.setAttribute("src", "foto-mulher-adulta.jpg");
      } else {
        img.setAttribute("src", "foto-mulher-idosa.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    img.style.borderRadius = '50%'
    res.appendChild(img);
  }
}
