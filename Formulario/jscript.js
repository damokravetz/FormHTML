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



document.getElementById("combopaises").addEventListener('click', function () {
    if (this.value == "Argentina") {

    }
});