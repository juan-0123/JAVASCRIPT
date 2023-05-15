function Buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datos");//dato ingresado en buscador
    filter = input.value.toUpperCase();//Convierte texto a mayuscula
    table = document.getElementById("tablaDatos");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) { //busqueda de fila x fila y columna o = nombre pelicula
      td = tr[i].getElementsByTagName("td")[0];//Nombre  de la pelicula
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {//si encontro nombre pelicula en tabla 
          tr[i].style.display = "";
          } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  