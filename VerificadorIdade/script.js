function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("year");
  var res = document.getElementById("res");
  if (fAno.value.length == 0 || fAno.value > ano) {
    window.alert(
      "Informações inválidas! Por favor, verifique os dados e tente novamente."
    );
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fAno.value);
    var genero = " ";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    img.style.width = "350px";
    img.style.height = "350px";
    img.style.borderRadius = "180px";
    img.style.marginTop = "20px";
    if (fsex[0].checked) {
      genero = "masculino";
      document.body.style.background = '#61c5fe'
      if (idade < 17) {
        img.setAttribute("src", "menino.jpg");
      } else if (idade < 60) {
        img.setAttribute("src", "meninoney.jpg");
      } else if (idade > 60) {
        img.setAttribute("src", "idoso.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "feminino";
      document.body.style.background = 'pink'
      if (idade < 17) {
        img.setAttribute("src", "menina.jpg");
      } else if (idade < 60) {
        img.setAttribute("src", "jovemmulher.jpg");
      } else if (idade > 60) {
        img.setAttribute("src", "idosa.jpg");
      }
    }

    res.style.textAlign = "center";
    res.innerHTML = `Você é do sexo ${genero} e tem ${idade} anos.`;
    res.appendChild(img);
  }
}
