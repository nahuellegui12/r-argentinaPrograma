/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/

let $calcularIntegrantes = document.querySelector(".ingresar");

$calcularIntegrantes.onclick = function () {
    let $cantidadDeIntegrantes = Number(document.querySelector(".cantidad-integrantes").value);

    crearIntegrantes($cantidadDeIntegrantes);
    return false;
}

function creaIntegrante() {
    let numero = 0;
    let $integrantes = document.querySelector(".integrantes");
    let label = document.createElement("label");
    label.textContent = `integrante`;
    label.className = "label-integrante"
    let inputIntegrante = document.createElement("input");
    inputIntegrante.className = "integrante";

    $integrantes.appendChild(label);
    $integrantes.appendChild(inputIntegrante);
}

function crearIntegrantes(integrantes) {
    for (i = 0; i < integrantes; i++) {
        creaIntegrante();
    }
}

let $calcularEdades = document.querySelector(".calcular");

$calcularEdades.onclick = function () {
    let $integrantes = document.querySelectorAll(".integrante");
    let integrantes = [];

    for (i = 0; i < $integrantes.length; i++) {
        integrantes.push(Number($integrantes[i].value));
    }
    // calcularMayorEdad(integrantes);
    calcularMenorEdad(integrantes);
    calcularPromedioEdad(integrantes);

    let $mayorEdad = document.querySelector(".menor-edad");
    $mayorEdad.textContent = `La mayor edad es: ${calcularMayorEdad(integrantes)}`

    let $menorEdad = document.querySelector(".mayor-edad");
    $menorEdad.textContent = `La menor edad es: ${calcularMenorEdad(integrantes)}`

    let $promedioEdad = document.querySelector(".promedio-edad");
    $promedioEdad.textContent = `La edad promedio es: ${calcularPromedioEdad(integrantes)}`
}

function calcularMayorEdad(array) {
    let contador = array[0];
    for (i = 0; i < array.length; i++) {

        if (array[i] > contador) {
            contador = array[i];
        }
    }
    
    return contador;
}

function calcularMenorEdad(array) {
    let contador = array[0];
    for (i = 0; i < array.length; i++) {

        if (array[i] < contador) {
            contador = array[i];
        }
    }
    
    return contador;
}

function calcularPromedioEdad(array) {
    let contador = 0;
    for (i = 0; i < array.length; i++) {
        contador = contador + array[i]
    }
    let promedio = contador / array.length;
    
    return promedio;
}


let $resetear = document.querySelector(".reset");
$resetear.onclick = function () {
    let $integrantes = document.querySelectorAll(".integrante");
    let $labelIntegrante = document.querySelectorAll(".label-integrante");
    for (i = 0; i < $integrantes.length; i ++) {
        $integrantes[i].remove();
    }
    for (i = 0; i < $labelIntegrante.length; i ++) {
        $labelIntegrante[i].remove();
    }
}