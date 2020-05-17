window.onload = function(){
    $("#aparecer").fadeOut();
    $('body').removeClass('hidden');
}
function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var days = ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
$(document).bind("contextmenu",function(e){
        return false;
    });

function verifiacadordeEdad(){
    var edad, nombre, apellidos, correo;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    fecha_na = document.getElementById("fecha_na").value;
    edad = document.getElementById("edad").value;

    expresion = /\w+@\w+\.+[a-z]/;

    apellidos = document.getElementById("apellidos").value;
   if (nombre === "" || apellidos === "" || correo === "" || fecha_na === "" || edad === "") {
        alert("Todos los campos son obligatorios");
        return false;
   }else if(edad <= 0 || edad > 120){
        alert("La edad no existe");
        return false;
   }else if (!expresion.test(correo)){
        alert("El correo no es valido");
        return false;
   }else{
    alert("los datos se guardaron correctamente");
   }
}
