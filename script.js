function calcularTotal() {
    var cantidadEntradas,
      total,
      categoria,
      entradaEstudiante,
      entradaTrainee,
      entradaJr,
      entradaGral;
  
    cantidadEntradas = document.getElementById('inputCantidad').value;
    categoria = document.getElementById('inputCategoria').value;
  
    console.log('cant entradas ' + cantidadEntradas + 'categoria ' + categoria);
  
    entradaEstudiante = 200 - (200 * 80) / 100;
    entradaTrainee = 200 - (200 * 50) / 100;
    entradaJr = 200 - (200 * 15) / 100;
    entradaGral = 200;
  
    if (cantidadEntradas > 0 && !isNaN(cantidadEntradas) && cantidadEntradas % 1 == 0) {
      if (categoria == 'Estudiante') {
        total = entradaEstudiante * cantidadEntradas;
        document.getElementById('importeTotal').innerHTML ='Total a Pagar: \u0024' + total;
      } else if (categoria == 'Trainee') {
        total = entradaTrainee * cantidadEntradas;
        document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024' + total;
      } else if (categoria == 'Junior') {
        total = entradaJr * cantidadEntradas;
        document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024' + total;
      } else if (categoria == 'General') {
        total = entradaGral * cantidadEntradas;
        document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024' + total;
      }
    } else {
      window.alert('Ingresar cantidad de entradas');
    }
  }
  
  function borrar() {
    document.getElementById('inputNombre').value = ' ';
    document.getElementById('inputApellido').value = ' ';
    document.getElementById('inputEmail').value = ' ';
    document.getElementById('inputCantidad').value = ' ';
    document.getElementById('inputCategoria').value = 'Estudiante';
    document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024';
  }