var tabela = document.querySelector('table')
tabela.addEventListener('dbclick', function (event) {
  setTimeout(function () {
    {
      event.target.parentNode.remove()
    }
  }, 1000)
})
