/* CLASE VALIDAR LOS CAMPOS*/

// Creamos las variables y que se guíen por el ID
function validar() {
    var nombre, nombre2, correo, clave, clave2, parrafo, valor;
    nombre = document.getElementById("nombre").value;
    nombre2 = document.getElementById("nombre2").value;
    correo = document.getElementById("correo").value;
    clave = document.getElementById("clave").value;
    clave2 = document.getElementById("clave2").value;
    valor = true;
    msgError = "";


    // SI CADA ATRIBUTO ES IGUAL A CAMPO VACÏO EXCLUYENDO A TELEFONO SE VUELVE AUTOMATICAMENTE EN CAMPO OBLIGATORIO
    // Retorna false para que se quede ahí y no muestre errores
    if (nombre == "") {
        msgError += "<br>* Primer nombre"
        valor = false;
    }
    if (nombre2 == "") {
        msgError += "<br>* Segundo nombre"
        valor = false;
    }
    if (correo == "") {
        msgError += "<br>* E-mail"
        valor = false;
    }
    if (clave == "") {
        msgError += "<br>* Contraseña"
        valor = false;
    }
    if (clave2 == "") {
        msgError += "<br>* Confirmar contraseña"
        valor = false;
    }

    // Si la clave 1 es diferente a la clave 2 muestra el error en pantalla
    if (clave != clave2) {
        msgError += "<br>* Las contraseñas deben coincidir"
        valor = false;
    }
    /* Mensaje de alerta que informa cuales campos estan malos */
    parrafo = document.getElementById("parrafo").innerHTML = "Por favor revisar los siguientes campos:" + msgError;
    return valor;



}
