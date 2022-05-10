var nomes = [];

function alterarTitulo() {
  var novoTitulo = prompt("Digite um titulo...");
  var titulo = document.getElementById("titulo");
  titulo.innerHTML = novoTitulo;
}

function alterarCor() {
  var cor = document.getElementById("input-cor").value;
  document.getElementById("titulo").style.color = cor;
}

function adicionarNaLista() {
  var nome = document.getElementById("input-nome").value;
  if (nome === "") {
    return alert("Digite um nome");
  }

  nomes.push(nome);
  document.getElementById("input-nome").value = "";
  atualizarLista();
}

function atualizarLista() {
  if (nomes.length === 0) return;
  document.getElementById("lista-area").innerHTML = '';
  var ol = document.createElement("ol");

  nomes.forEach(function (nome) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(nome));
    ol.appendChild(li);
  });

  document.getElementById("lista-area").appendChild(ol);
}
