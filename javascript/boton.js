/* CLASE CAMBIAR BOTON */

function changeText(submitId) {

    // Las mismas variables de la validación
    var submit, nombre, nombre2, correo, clave, clave2;

    nombre = document.getElementById("nombre").value;
    nombre2 = document.getElementById("nombre2").value;
    correo = document.getElementById("correo").value;
    clave = document.getElementById("clave").value;
    clave2 = document.getElementById("clave2").value;

    // Si todos los campos obligatorios es diferente a campo vació cambie el texto por otro y las claves son iguales
    if (nombre != "" && nombre2 != "" && correo != "" && clave != "" && clave2 != "" && clave == clave2) {

        submit = document.getElementById(submitId);
        submit.value = 'Sus datos han sido registrados..';
        return false;
    };

