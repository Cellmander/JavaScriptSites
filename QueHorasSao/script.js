function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var bom = document.getElementById('saudacao')
  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes();
  var sec = data.getSeconds()
  msg.innerHTML = `Agora são <strong>${hora}:${min}h</strong>.`;
  if (hora > 0 && hora < 12) {
    img.src = "manha.jpg";
    bom.innerHTML = '<strong>Bom dia!</strong>'
    document.body.style.background = "#35c5ff";
    
  } else if (hora >= 12 && hora < 18) {
    img.src = "tarde.jpg";
    bom.innerHTML = '<strong>Boa tarde!</strong>'
    document.body.style.background = '#fd951c';
    
  } else {
    img.src = "noite.jpg";
    bom.innerHTML = '<strong>Boa Noite!</strong>'
    document.body.style.background = '#0a1819';
  }
}
