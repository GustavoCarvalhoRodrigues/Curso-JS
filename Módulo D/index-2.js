var botao = document.getElementsByTagName("input")[3];

botao.addEventListener("click", verifique);

function verifique() {
  // Ano atual
  var data = new Date();
  var ano = data.getFullYear();

  // Ano do nascimento
  var AnoNascimento = document.getElementById("txtano");

  // Resultado
  var res = document.getElementsByTagName("p")[0];

  // Mensagem de erro ano 0 ou ano acima do atual
  if (AnoNascimento.value.length == 0 || Number(AnoNascimento.value) > ano) {
    alert("[ERRO] verifique os dados novamente!");
  } else {
    // Selecionando homem ou mulher
    var idade = ano - Number(AnoNascimento.value);
    var sexo = document.getElementsByName("Tsex");
    var genero = "";
    if (sexo[0].checked) {
      genero = "Homem";
      // Adiciono imagem sendo criança, adulto e idoso
      if (idade < 10) {
        var imagem = document.createElement("img");
        imagem.setAttribute("src", "Criança_M.jpg");
      } else if (idade < 21) {
        var imagem = document.createElement("img");
        imagem.setAttribute("src", "Homem_Jovem.jpg");
      } else if (idade < 60) {
        var imagem = document.createElement("img");
        imagem.setAttribute("src", "Homem_adulto.jpg");
      } else {
        var imagem = document.createElement("img");
        imagem.setAttribute("src", "Homem_idoso.jpg");
      }
    } else if (sexo[1].checked) {
      genero = "Mulher";
      if (idade < 10) {
        var imagem = document.createElement("img");
        imagem.setAttribute("src", "Criança_F.jpg");
      } else if (idade < 21) {
        var imagem = document.createElement("img");
        imagem.setAttribute("src", "Mulher_Jovem.jpg");
      } else if (idade < 60) {
        var imagem = document.createElement("img");
        imagem.setAttribute("src", "Mulher_adulta.jpg");
      } else {
        var imagem = document.createElement("img");
        imagem.setAttribute("src", "Mulher_idosa.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `O(A) ${genero} tem ${idade} anos.`;
    imagem.style.maxWidth = "220px";
    imagem.style.borderRadius = "50%";
    res.appendChild(imagem);
  }
}
