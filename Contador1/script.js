function contar() {
  var inicio = document.getElementById("txti");
  var fim = document.getElementById("txtf");
  var passo = document.getElementById("txtp");
  var res = document.getElementById("res");

  if (
    passo.value.length == 0 ||
    fim.value.length == 0 ||
    inicio.value.length == 0
  ) {
    res.innerHTML = ` ` 
    window.alert("[ERRO] Faltam dados!");
  } else {
    res.innerHTML = "contando: ";
    let i = Number(inicio.value); // Mesmo o tipo do input sendo number, tem que transformar a variável
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{27A1} `; // É necessário a presença desse +=, para realizar a concatenação, fazendo com que os valores apareçam lado a lado no resultado
      }
    } else {
      for (let c = i; c >= f;c -= p) {
        res.innerHTML += `${c} \u{27A1}`;
      }
    }
  }
}

// res.innerHTML = `${i}`
