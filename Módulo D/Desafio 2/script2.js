function verificar() {
  var data = new Date();
  var ano = data.getFullYear();

  var fano = document.querySelector("input#txtano");
  var resultado = document.getElementById("res");
  /* Válido esses dados, dizendo se não tem valor
    ou o ano digitado é maior que o ano atual
    */
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero;
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    // Identificando os sexos diferentes
    if (fsex[0].checked) {
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
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "foto-bebe-f.jpg");
      } else if (idade < 21) {
        img.setAttribute("src", "foto-mulher-jovem.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "foto-mulher-adulta.jpg");
      } else {
        img.setAttribute("src", "foto-mulher-idosa.jpg");
      }
    }
    resultado.style.textAlign = "center";
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    resultado.appendChild(img); // adicionar o elemento
    img.style.borderRadius = '50%'
  }
}
