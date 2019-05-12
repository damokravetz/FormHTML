document.getElementById("btnenviar").addEventListener('click', function () {
    var nom = document.getElementById("txtNombre").value;
    var ape = document.getElementById("txtApellido").value;
    var mail = document.getElementById("txtEmail").value;
    var tel = document.getElementById("txtTelefono").value;
    var res = " ingrese nuevamente.";
    var str1 = " invalido,";
    var str = "";
    if (nom != "") {
        nom = true;
    } else {
        nom = false;
        str=str.concat("Nombre");
    }
    if (ape != "") {
        ape = true;
    } else {
        ape = false;
        if (str!="") {
            str=str.concat(", ");
            str1 = " invalidos,";
        }
        str=str.concat("Apellido");
    }
    if (mail.includes("@")) {
        mail = true;
    } else {
        mail = false;
        if (str!="") {
            str=str.concat(", ");
            str1 = " invalidos,";
        }
        str=str.concat("Mail");
    }
    if (parseInt(tel)) {
        tel = true;
    } else {
        tel = false;
        if (str!="") {
            str=str.concat(", ");
            str1 = " invalidos,";
        }
        str=str.concat("Telefono");
    }
    if (nom != true || ape != true || mail != true || tel != true) {
        alert(str.concat(str1.concat(res)));
        return false;
    } else {
        return true;
    }
});

$(document).ready(function () {
    $.getJSON("paises.json", leerJsonPaises );
});

function leerJsonPaises( data ) {
    //console.log("paso");
    //console.log(data);
    $.each(data, function (idx, item) {
        var html = "<option value=" + item.code + ">" + item.name + "</option>"
        $("#combopaises").append(html);
    });
}

//$("#combopaises").change(crearcombo)
$("#combopaises").addEventListener('change', crearcombo)
    

function crearcombo() {
    var micombo = $("#combopaises")
    if (micombo.find(":selected").val()=="AR") {
        var ncombo = "<div class='form-group'></div><label for='comboprovincias'>Provincia:</label><select class='form-control' id='comboprovincias'><option >Seleccionar una Provincia</option></select>"
     $("#divcombos").append(ncombo);
        $.getJSON("provincias.json", traerprovincias)
    }
}

function traerprovincias(data) {
    $.each(data, function (index, value) {
        var opciones = "<option value=" + value.state + ">" + value.state + "</option>";
        $("#comboprovincias").append(opciones)
    });
}