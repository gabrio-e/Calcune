function buscar_alunos() {
    let input = document.getElementById('filtrar-tabela').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('nome');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
