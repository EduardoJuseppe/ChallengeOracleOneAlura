function iniciarJuego(){
    document.getElementById('nueva-palabra').style.display = 'none';
    document.getElementById('input-nueva-palabra').style.display = 'none';
    document.getElementById('iniciar-juego').style.display = 'none';
    document.getElementById('espacioCanvas').style.display = 'block';
    document.getElementById('detener-juego').style.display = 'block';
}
function detenerJuego(){
    document.getElementById('nueva-palabra').style.display = 'block';
    document.getElementById('input-nueva-palabra').style.display = 'block';
    document.getElementById('iniciar-juego').style.display = 'block';
    document.getElementById('espacioCanvas').style.display = 'none';
    document.getElementById('detener-juego').style.display = 'none';
}

function sortearPalabra(){
    if(palabras.length==0){
        return false;
    }
    else{
        tamanhoArreglo=(palabras.length)-1;
        var numeroSorteado=Math.round(Math.random()*tamanhoArreglo);
        var palabra;
        //console.log("Tamanho arreglo: "+palabras.length);
        palabra=palabras[numeroSorteado]
        palabras.splice(numeroSorteado,1);
        numeroPalabra++;
        return palabra;
    }
    
}


function validarMayusculas(nuevaPalabraAuxiliar){
    for(var i=0; i<nuevaPalabraAuxiliar.length; i++){
        if(/[a-z]/.test(nuevaPalabraAuxiliar.charAt(i)) || /[0-9]/.test(nuevaPalabraAuxiliar.charAt(i))){
            alert("Se detecto que no se ingresaron puras letras mayusculas, favor de ingresar solo letras mayusculas");
            return false;
        }
    }
    return true;  
}

function validarLetra(keyValue){
    if(/[A-Z]/.test(keyValue) && keyValue.length==1 || keyValue=='Ñ'){
        return true; 
    }
    else{
        alert("La letra ingresada no es una Mayuscula");
        return false;
    }  
}

function vaciarUbicaciones(){
    for ( var i = ubicaciones.length; i > 0; i--) {
        ubicaciones.pop();
    }
}
function vaciarLetras(){
    for ( var i = letras.length; i > 0; i--) {
        letras.pop();
    }
}


