window.onload = function(){
    $("#aparecer").fadeOut();
    $('body').removeClass('hidden');
}
function actual() {
         fecha=new Date(); //Actualizar fecha.
         hora=fecha.getHours(); //hora actual
         minuto=fecha.getMinutes(); //minuto actual
         segundo=fecha.getSeconds(); //segundo actual
         if (hora<10) { //dos cifras para la hora
            hora="0"+hora;
            }
         if (minuto<10) { //dos cifras para el minuto
            minuto="0"+minuto;
            }
         if (segundo<10) { //dos cifras para el segundo
            segundo="0"+segundo;
            }
         //ver en el recuadro del reloj:
         mireloj = hora+" : "+minuto+" : "+segundo; 
                 return mireloj; 
         }
function actualizar() { //función del temporizador
   mihora=actual(); //recoger hora actual
   mireloj=document.getElementById("reloj"); //buscar elemento reloj
   mireloj.innerHTML=mihora; //incluir hora en elemento
     }
setInterval(actualizar,1000); //iniciar temporizador

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
