function gerar() {
  var numero = document.getElementById("numero");
  var res = document.getElementById("res");
  var c = 1;
  res.innerHTML = " ";

  if (numero.value.length == 0) {
    window.alert("Digite um número!");
  } else {
    var num = Number(numero.value);
    for (c; c <= 10; c++) {
      res.innerHTML += `${num} x ${c} = ${num*c} <br>`;
    }
  }
}
