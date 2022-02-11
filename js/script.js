
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var mensajeEncriptado = document.querySelector("#msg");
var mensajeNormal = document.querySelector("#input-texto");

var colorMensajeNormal = document.querySelector(".text-input")
var colorEncriptado = document.querySelector(".text-input2")
var colorEncriptado2 = document.querySelector(".text-input2")

document.querySelector("#btn-copy").addEventListener("click", copy);

var banderaColorEncriptado=false;
var banderaColorDesencriptar=false;
var banderaColorMensajeNormal=true;

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var cadena = mensajeNormal.value;
    var palabra = "Encriptar";
    validarCadena(cadena,palabra);
});

botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var cadena = mensajeNormal.value;
    var palabra = "Desencriptar";
    validarCadena(cadena,palabra);
});

function validarCadena(cadena,palabra){
    var acento;
    if(cadena == ""){
        alert("No se ha ingresado algun texto a " + palabra +", por favor ingrese algun texto a " + palabra);
        enfocarMensajeNormal();
    }
    if(cadena != "" && palabra == "Encriptar"){
        acento = validarAcentoMayuscula(cadena,acento);
            if(acento == false){
                cadena = encriptarCadena(cadena);
                mensajeEncriptado.value = cadena ;
                mensajeNormal.value = "";
            }    
    }
    if(cadena != "" && palabra == "Desencriptar"){
        acento = validarAcentoMayuscula(cadena,acento);
            if(acento == false){
                cadena = desencriptarCadena(cadena);
                mensajeEncriptado.value = cadena ;
                mensajeNormal.value = "";
            }
    }
}

function validarAcentoMayuscula(cadena,acento){
    for(var i=0; i<cadena.length; i++){
        if(cadena.charAt(i) == "á" || cadena.charAt(i) == "é" || cadena.charAt(i) == "í" || cadena.charAt(i) == "ó" || cadena.charAt(i) == "ú" || /[A-Z]/.test(cadena.charAt(i))){
            alert("Se encontro un acento o una letra en mayusculas, por favor ingrese un texto correcto ");
            mensajeNormal.value = "";
            acento = true;
            enfocarMensajeNormal();
            break;
        }
        else{
            acento=false
        }
    }
    return acento;
}

function encriptarCadena(cadena){
    
        cadena = cadena.replace(new RegExp("e","g"),"enter");
        cadena = cadena.replace(new RegExp("i","g"),"imes");
        cadena = cadena.replace(new RegExp("a","g"),"ai");
        cadena = cadena.replace(new RegExp("o","g"),"ober");
        cadena = cadena.replace(new RegExp("u","g"),"ufat");
        enfocarMensajeEncriptado();
        
        colorEncriptado.classList.add("crearColorInputEncriptar");
        colorMensajeNormal.classList.remove("crearColorMensajeNormal");
        banderaColorEncriptado = true;
        
        return cadena;
}

function desencriptarCadena(cadena){

        cadena = cadena.replace(new RegExp("enter","g"),"e");
        cadena = cadena.replace(new RegExp("imes","g"),"i");
        cadena = cadena.replace(new RegExp("ai","g"),"a");
        cadena = cadena.replace(new RegExp("ober","g"),"o");
        cadena = cadena.replace(new RegExp("ufat","g"),"u");
        enfocarMensajeEncriptado();

        colorEncriptado2.classList.add("crearColorInputDesencriptar");
        colorMensajeNormal.classList.remove("crearColorMensajeNormal");
        banderaColorDesencriptar = true;

        return cadena;
}

function copy() {
    var copyText = document.querySelector("#msg");
    copyText.select();
    document.execCommand("copy");
    enfocarMensajeNormal();
    if(banderaColorEncriptado){
        colorEncriptado.classList.remove("crearColorInputEncriptar");
        colorMensajeNormal.classList.add("crearColorMensajeNormal");
    }
    if(banderaColorDesencriptar){
        colorEncriptado.classList.remove("crearColorInputDesencriptar");
        colorMensajeNormal.classList.add("crearColorMensajeNormal");
    }
    if(mensajeEncriptado.value == ""){
        alert("No se tiene algun texto a copiar");
    }      
}

function enfocarMensajeEncriptado(){
    mensajeEncriptado.select();
}

function enfocarMensajeNormal(){
    mensajeNormal.select();
}



  
  