function CalcularMedia() {
  var nota1 = parseFloat(document.getElementById('nota1').value)
  var nota2 = parseFloat(document.getElementById('nota2').value)
  var nota3 = parseFloat(document.getElementById('nota3').value)

  var media = ((nota1 + nota2 + nota3) / 3).toFixed(1)
  if (media < 0 || media > 10)
    document.getElementById('resultado').innerHTML = 'Média não é válida'
  if (media >= 7)
    document.getElementById('resultado').innerHTML = 'Aprovado! Média ' + media
  else if (media >= 4 < 7)
    document.getElementById('resultado').innerHTML =
      'Prova Final! Média ' + media
  else
    document.getElementById('resultado').innerHTML = 'Reprovado! Média ' + media
}
