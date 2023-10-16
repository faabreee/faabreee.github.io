


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





function showTab(tabId) {
    // Oculta todos los contenidos de pestañas
    var tabContents = document.querySelectorAll('.tab-content');
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = 'none';
    }
  
    // Muestra el contenido de la pestaña seleccionada
    document.getElementById(tabId).style.display = 'block';
  }
  
  // Mostrar la primera pestaña por defecto
  showTab('tab1');
  