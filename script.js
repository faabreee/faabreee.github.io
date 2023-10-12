document.addEventListener("DOMContentLoaded", function() {
    // Obtiene la barra del gráfico
    const barra = document.querySelector(".barra");

    // Establece el porcentaje de carga (ajusta el valor según sea necesario)
    const porcentajeCarga = 60; // Cambia esto para ajustar el porcentaje de carga

    // Calcula el ancho de la barra en función del porcentaje de carga
    const anchoBarra = (porcentajeCarga / 100) * parseFloat(getComputedStyle(barra.parentNode).width);

    // Configura el ancho de la barra
    barra.style.width = anchoBarra + "px";
});

