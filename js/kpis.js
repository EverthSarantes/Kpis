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

function calcTiempoMedioResolucion(){

    //tiempo medio de resolucion
    var td = parseFloat(document.getElementById("td").value);
    var nr = parseFloat(document.getElementById("nr").value);

    var mttr = td/nr;
    document.getElementById("resultmttr").value = mttr.toFixed(2);

}

function calcSatifaccion(){
    //satisfaccionde cliente
    var cs = parseFloat(document.getElementById("cs").value);
    var nrst = parseFloat(document.getElementById("nrst").value);

    var CSAT = cs/nrst;

    document.getElementById("resultcsat").value = CSAT.toFixed(2);
}
function calcCovertura(){
    var lp = parseFloat(document.getElementById("lp").value);
    var lt = parseFloat(document.getElementById("lt").value);

    var cobertura = lp/lt;
    document.getElementById("resultcobertura").value = cobertura.toFixed(2);
}

//Funcionamiento de los botones
document.getElementById("calcularRotacionBtn").addEventListener("click", calcRotacionTotal);
document.getElementById("CalcularDispBtn").addEventListener("click", calcDisponibilidad);
document.getElementById("btncalc_MTTR").addEventListener("click", calcTiempoMedioResolucion);
document.getElementById("btncalc_CSAT").addEventListener("click", calcSatifaccion);
document.getElementById("calcularCoberturaBtn").addEventListener("click", calcCovertura);
