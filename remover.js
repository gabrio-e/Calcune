function removeLinha(linha) {
  var i = linha.parentNode.parentNode.rowIndex
  document.getElementById('tbl').deleteRow(i)
}
