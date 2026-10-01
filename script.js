function responder1() {
    const respuesta = document.getElementById("respuesta1").value;

    if (respuesta == "1612") {
        document.getElementById("resultado1").innerHTML = "Correcto";
    } else {
        document.getElementById("resultado1").innerHTML = "Incorrecto";
    }
}

function responder2() {
    const respuesta = document.getElementById("respuesta2").value;

    if (respuesta == "Milan") {
        document.getElementById("resultado2").innerHTML = "Correcto";
    } else {
        document.getElementById("resultado2").innerHTML = "Incorrecto";
    }
}

function responder3() {
    const respuesta = document.getElementById("respuesta3").value;

    if (respuesta == "Roma") {
        document.getElementById("resultado3").innerHTML = "Correcto";
    } else {
        document.getElementById("resultado3").innerHTML = "Incorrecto";
    }
}