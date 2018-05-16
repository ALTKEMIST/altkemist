function modal_cmercuris(){
    var result= 'Versión 0.0.9 // 30 sept 2016<br>'+
    '+ Creación de la aplicación<br>'+
    '+ Añadida opción para reproducir 1 canción.<br>'+
    
    'Version 1.0.0 - Realese 1 07 oct 2016<br>'+
    '+ Añadida versión beta de los temas<br>'+
    '+ Ahora se permite la reproducción de múltiples canciones<br>'+
    '+ Añadida sección de personalización<br>'+
    '+ Añadida sección acerca de<br>'+
    '* Habilitados botones Next > y Previous <<br>'+
    '- Eliminado cuadro de texto con tamaño del cuadro de imagen<br>'+
    '- Eliminado Bug0001.Datos("Incorrecto funcionamiento del timer")<br>'+
    
    'Version 1.1.0 - Realese 1 08 may 2017<br>'+
    '+ Añadido nuevo ícono de la aplicación<br>'+
    '+ Corregido texto de la ruta seleccionada<br>'+
    '+ Corregida posición de los botones <Next> y <Previous><br>'+
    '* Habilitado nuevo Botón de volumen<br>'+
    '- Eliminado Bug0002.Datos("Error al abrir archivo/imagen y cancelar")<br>'+
    '- Eliminado Bug0003.Datos("Error al no elegir una ruta y presionar <Guardar>")<br>'+
    
    '====<br>'+
    'Notas de Versión: Próximo realese enfocado en implementar correctamente los temas.<br>'+
    'Se permitirá además cambiar la forma en que se rellena la imagen de fondo. Se habilitará la opción de utilizar la carátula de las canciones.<br>'+
    '====';
    $("#modal1").modal("show");
    $("#cuerpo_modal").html(result);
}

function modal_csmalltin(){
    var result = "Versión 1.0.0 - 21 de octubre de 2017<br>-Release";
    $("#modal1").modal("show");
    $("#cuerpo_modal").html(result);
}

function modal_cayvc(){
    var result = "Versión 1.0.0 - 23 de mayo de 2017<br>-Release";
    $("#modal1").modal("show");
    $("#cuerpo_modal").html(result);
}

function modal_capa(){
    var result = "Versión 1.0.0 - 24 de junio de 2017<br>-Release";
    $("#modal1").modal("show");
    $("#cuerpo_modal").html(result);
}