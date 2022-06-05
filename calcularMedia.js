media = 0
function CalcularMedia() {
  var nota1 = parseFloat(document.getElementById('nota1').value)
  var nota2 = parseFloat(document.getElementById('nota2').value)
  var nota3 = parseFloat(document.getElementById('nota3').value)

  var media = ((nota1 + nota2 + nota3) / 3).toFixed(1)

  if (media < 0 || media > 10)
    document.getElementById('resultado').innerHTML = 'Média não é válida'
  else if (media >= 7)
    document.getElementById('resultado').innerHTML = 'Aprovado! Média ' + media
  else if (media >= 4 < 7)
    document.getElementById('resultado').innerHTML =
      'Prova Final! Média ' + media
  else
    document.getElementById('resultado').innerHTML = 'Reprovado! Média ' + media
  return media
}
var situacao = ''
function Situacao() {
  var nota1 = parseFloat(document.getElementById('nota1').value)
  var nota2 = parseFloat(document.getElementById('nota2').value)
  var nota3 = parseFloat(document.getElementById('nota3').value)
  var media = ((nota1 + nota2 + nota3) / 3).toFixed(1)
  if (media < 0 || media > 10) {
    situacao = 'Média não é válida'
  } else if (media >= 7) {
    situacao = 'Aprovado!'
  } else if (media >= 4 && media < 7) {
    situacao = 'Prova Final! '
  } else {
    situacao = 'Reprovado!'
  }
  return situacao
}

function Adicionar(idTabela) {
  var tabela = document.getElementById(idTabela)
  var numeroLinhas = tabela.rows.length
  var linha = tabela.insertRow(numeroLinhas)
  var celula1 = linha.insertCell(0)
  var celula2 = linha.insertCell(1)
  var celula3 = linha.insertCell(2)
  var celula4 = linha.insertCell(3)
  var celula5 = linha.insertCell(4)
  var celula6 = linha.insertCell(5)
  var celula7 = linha.insertCell(6)

  var input = document.querySelector('#nome')
  var inputNota1 = document.querySelector('#nota1')
  var inputNota2 = document.querySelector('#nota2')
  var inputNota3 = document.querySelector('#nota3')

  var texto = input.value
  var nota1 = inputNota1.value
  var nota2 = inputNota2.value
  var nota3 = inputNota3.value

  celula1.innerHTML = texto
  celula2.innerHTML = parseInt(nota1)
  celula3.innerHTML = parseInt(nota2)
  celula4.innerHTML = parseInt(nota3)
  celula5.innerHTML = CalcularMedia()
  celula6.innerHTML = Situacao()
  celula7.innerHTML = "<button onclick='removeLinha(this)'>Remover</button>"
}
