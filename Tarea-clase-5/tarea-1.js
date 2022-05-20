//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $submit = document.querySelector(".submit");

$submit.onclick = function(){
    let primerNombre = document.querySelector(".primer-nombre").value;
    let segundoNombre = document.querySelector(".segundo-nombre").value;
    let apellido = document.querySelector(".apellido-usuario").value;
    let edad = document.querySelector(".edad-usuario").value;

    let texto = document.createElement("p");
    texto.textContent = `${primerNombre} ${segundoNombre} ${apellido}, ${edad} años`
    let $datos = document.querySelector('.datos');
    $datos.appendChild(texto);
    let $titulo = document.querySelector("h1");
    $titulo.textContent = `Bienvenido, ${primerNombre}!`;
}