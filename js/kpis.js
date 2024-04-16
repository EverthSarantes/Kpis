//funciones Everth

function calcularTasaFallas(numero_fallas, tiempo_operacion){
    // Tasa de fallas = (Número total de fallas / Tiempo total de operación en dias) * 100
    return (numero_fallas / tiempo_operacion) * 100;
}

function calcularTiempoMedioFallas(){
    
}

//Funciones Daniel
function calcRotacionTotal(){
    //Rotacion total = (Lineas de codigo agregadas + editadas + eliminadas)/tiempo
    var codigoAd = parseFloat(document.getElementById("lca").value);
    var codigoMod = parseFloat(document.getElementById("lcm").value);
    var codigoEl = parseFloat(document.getElementById("lce").value);
    var tiempo = parseFloat(document.getElementById("time").value);

    if (!isNaN(codigoAd) && !isNaN(codigoMod) && !isNaN(codigoEl) && !isNaN(tiempo)){
        var rotacion = (codigoAd + codigoMod + codigoEl) / tiempo;
        document.getElementById("resultado1").value = rotacion.toFixed(2);
    }else {
        document.getElementById("resultado1").innerText = "Por favor, ingrese números válidos.";
    }
}
function calcDisponibilidad(){
    //Disponibilidad = (Tiempo de actividad/(tiempo de actividad + tiempo de inactividad))*100
    var tiempoActividad = parseFloat(document.getElementById("ta").value);
    var tiempoInactividad = parseFloat(document.getElementById("ti").value);

    if (!isNaN(tiempoActividad) && !isNaN(tiempoInactividad)){
        var disponibilidad = (tiempoActividad/(tiempoActividad+tiempoInactividad))*100;

        document.getElementById("resultado-disponibilidad").value = disponibilidad.toFixed(2);
    }else {
        document.getElementById("resultado-disponibilidad").innerText = "Por favor, ingrese números válidos.";
    }
}

//Funcionamiento de los botones
document.getElementById("calcularRotacionBtn").addEventListener("click", calcRotacionTotal);
document.getElementById("CalcularDispBtn").addEventListener("click", calcDisponibilidad);

