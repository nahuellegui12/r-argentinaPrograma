//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $calcular = document.querySelector(".calcular");

$calcular.onclick = function() {
    let $horasDeClase = document.querySelectorAll(".horas-clase");
    let $minutosDeClase = document.querySelectorAll(".minutos-clase");
    let $segundosDeClase = document.querySelectorAll(".segundos-clase");
    let horasTotales = 0;
    let minutosTotales = 0;
    let segundosTotales = 0;

    for(let l=0; l<$segundosDeClase.length; l++) {
        segundosTotales = segundosTotales + Number($segundosDeClase[l].value);
    }
    
    if(segundosTotales > 60){
        minutosTotales = Math.trunc(segundosTotales/60);
        segundosTotales= Math.trunc(segundosTotales%60);
    } 
       
    for(let j=0; j<$minutosDeClase.length; j++) {
        minutosTotales = minutosTotales +  Number($minutosDeClase[j].value);
    }

    if(minutosTotales > 60){
        horasTotales = Math.trunc(minutosTotales/60);
        minutosTotales = Math.trunc(minutosTotales%60);
    }

    for(let i=0; i<$horasDeClase.length; i++) {
        horasTotales = horasTotales + Number($horasDeClase[i].value);
    }
    
    let $tiempoTotalClases = document.querySelector(".tiempo-total-clases");
    $tiempoTotalClases.textContent=`El tiempo total es: ${horasTotales}Horas ${minutosTotales}Minutos ${segundosTotales}Segundos`    
    
    return false;
}