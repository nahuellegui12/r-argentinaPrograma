//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let $calcular = document.querySelector(".calcular");

$calcular.onclick = function () {
  let $lista = document.querySelectorAll(".lista li");
  let nuevoArray = [];

  for (i = 0; i < $lista.length; i++) {
    nuevoArray.push(Number($lista[i].textContent));
  }

  let promedio = 0;
  for (i = 0; i < nuevoArray.length; i++) {
    promedio = promedio + nuevoArray[i];
  }
  promedio = promedio / nuevoArray.length;

  let menorNumero = nuevoArray[0];
  for (i = 0; i < nuevoArray.length; i++) {
    if (nuevoArray[i] < menorNumero) {
      menorNumero = nuevoArray[i];
    }
  }

  let mayorNumero = nuevoArray[0];
  for (i = 0; i < nuevoArray.length; i++) {
    if (nuevoArray[i] > mayorNumero) {
      mayorNumero = nuevoArray[i];
    }
  }

  let numeroRepetido;
  let arrayDeRepetidos = [];
  for(i = 0; i < nuevoArray.length; i++) {
    for(j = i + 1; j < nuevoArray.length; j++) {
      if(nuevoArray[i]===nuevoArray[j]) {
        arrayDeRepetidos.push(nuevoArray[i])
        numeroRepetido = arrayDeRepetidos[0];
      }
    }
  }

  let $promedio = document.querySelector(".promedio");
  let $menorNumero = document.querySelector(".menor-numero");
  let $mayorNumero = document.querySelector(".mayor-numero");
  let $numeroRepedito = document.querySelector('.numero-repetido');

  $promedio.textContent = `El promedio es; ${promedio}`;
  $menorNumero.textContent = `El numero mas pequeño es: ${menorNumero}`;
  $mayorNumero.textContent = `El numero mas grandes es: ${mayorNumero}`;
  $numeroRepedito.textContent = `El numero mas frecuente es: ${numeroRepetido}`;
};