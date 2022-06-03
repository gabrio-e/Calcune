var botao = document.querySelector('#adicionar')
botao.addEventListener('click', function (event) {
  event.preventDefault()
  var form = document.querySelector('#form')
  console.log(form.nome.value)
})
function Adicionar() {
  document.getElementById('table').innerHTML = 'Média não é válida'
}
