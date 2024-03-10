var res = document.getElementById("res");
let valor = [];

function limparInput(inputElement) {
  inputElement.value = " ";
  inputElement.focus();
}

function adicionar() {
  var numero = document.getElementById("txtn");
  var val = document.getElementById("valores");
  var num = parseInt(numero.value);
  res.innerHTML = ' '

  if (num < 1 || num > 100 || numero.value.length == 0) {
    window.alert("Favor inserir um número entre 1 e 100.");
    limparInput(numero);
    return;
  }
  if (valor.includes(num)) {
    alert("Número já adicionado!");
    limparInput(numero);
    return;
  }

  valor.push(num);
  var item = document.createElement("option");
  item.text = `Valor ${num} adicionado.`;
  val.appendChild(item);
  limparInput(numero);
}

function finalizar() {
  if (valor.length == 0) {
    alert("Insira um número antes de finalizar!");
  } else {
    valor.sort();
    var menor = valor[0];
    var maior = valor[valor.length - 1];
    var soma = valor.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    var media = soma / valor.length;
    res.innerHTML = `<p>Ao todo, temos ${valor.length} números cadastrados.</p>
  <p>O maior valor informado foi o ${maior}</p>
  <p>O menor valor informado foi o ${menor}</p>
  <p>Somando todos os valores, temos ${soma}</p>
  <p>A média dos valores informados é ${media}</p>`;
    valor = [];
    var val = document.getElementById("valores");
    val.innerHTML = " ";
  }
}
