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

  let numeroRepetido = nuevoArray[0];
  for (i = 0; i < nuevoArray.length; i++) {
  }

  console.log(menorNumero);
  console.log(mayorNumero);
  console.log(promedio);
};