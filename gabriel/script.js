function valida_envia() {
    //valido el nombre
    if (document.fvalida.nombreCompleto.value.length == 0) {
        alert("Completa con su nombre y apellido")
        document.fvalida.nombreCompleto.focus()
        return 0;
    }
    //valido el email
    if (document.fvalida.email.value.length == 0) {
        alert("Completa con su email")
        document.fvalida.email.focus()
        return 0;
    }
    //valido el numero de telefono
    telefono = document.fvalida.telefono.value
    telefono = validarEntero(telefono)
    document.fvalida.telefono.value = telefono
    if (telefono == "") {
        alert("Tiene que introducir un número entero en su telefono.")
        document.fvalida.telefono.focus()
        return 0;
    } else {
        if (telefono < 1000000000) {
            alert("Debe escribir un numero de diez digitos.")
            document.fvalida.telefono.focus()
            return 0;
        }
    }
    //valido el mensaje
    if (document.fvalida.mensaje.value.length == 0) {
        alert("Completa su mensaje")
        document.fvalida.mensaje.focus()
        return 0;
    }
    //valido el interés de novedades
    if (document.fvalida.novedades.checked == true) {
        if (((document.fvalida.ambitoDolar.checked) && (document.fvalida.ambitoCripto.checked) && (document.fvalida.ambitoBolsa.checked)) == false) {
            alert("Debe seleccionar al menos ambito de interes.")
            document.fvalida.ambitoDolar.focus()
            return 0;
        }
    }

    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();

    function validarEntero(valor) {
        
        valor = parseInt(valor)

        //Compruebo si es un valor numérico
        if (isNaN(valor)) {
            //entonces (no es numero) devuelvo el valor cadena vacia
            return ""
        } else {
            //En caso contrario (Si era un número) devuelvo el valor
            return valor
        }
    }
}
