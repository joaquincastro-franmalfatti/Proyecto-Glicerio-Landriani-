
function responder(pregunta, respuesta) {
    let correcto = false;

    if (pregunta == 1 && respuesta == 1588) {
        correcto = true;
    }

    if (pregunta == 2 && respuesta == "pias") {
        correcto = true;
    }

    if (pregunta == 3 && respuesta == "educacion") {
        correcto = true;
    }

    if (pregunta == 4 && respuesta == "calasanz") {
        correcto = true;
    }

    if (pregunta == 5 && respuesta == 1618) {
        correcto = true;
    }

    if (correcto == true) {
        document.getElementById("resultado" + pregunta).innerHTML = "Correcto";
    } else {
        document.getElementById("resultado" + pregunta).innerHTML = "Incorrecto";
    }
}
