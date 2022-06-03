function Adicionar(idTabela) {
  var tabela = document.getElementById(idTabela)
  var numeroLinhas = tabela.rows.length
  var linha = tabela.insertRow(numeroLinhas)
  var celula1 = linha.insertCell(0)
  var celula2 = linha.insertCell(1)
  var celula3 = linha.insertCell(2)
  var celula4 = linha.insertCell(3)
  var celula5 = linha.insertCell(4)

  var input = document.querySelector('#nome')
  var inputNota1 = document.querySelector('#nota1')
  var inputNota2 = document.querySelector('#nota2')
  var inputNota3 = document.querySelector('#nota3')

  var texto = input.value
  var nota1 = inputNota1.value
  var nota2 = inputNota2.value
  var nota3 = inputNota3.value

  celula1.innerHTML = texto
  celula2.innerHTML = nota1
  celula3.innerHTML = nota2
  celula4.innerHTML = nota3
  celula5.innerHTML = "<button onclick='removeLinha(this)'>Remover</button>"
}
