botonIniciarJuego.addEventListener("click",function(event){
    event.preventDefault();
    juegoIniciado=true;
    var inicioX = 500;
    var finalX = 555;
    palabraSorteada=sortearPalabra();
    contadorGanador=palabraSorteada.length;
    if(palabraSorteada==false){
        alert("Lo sentimos, ya no contamos con mas palabras para sortear, favor de agregar mas palabras");
    }
    else{
        crearBase();
        //console.log("tamanho de la palabra sorteada es: " + palabraSorteada.length);
        for(var x=0;x<palabraSorteada.length;x++){
            crearEspaciosPalabra(inicioX,finalX);
            ubicaciones[x]=inicioX;
            inicioX = finalX+10;
            finalX = inicioX+55;
        }
        for(var x=0;x<ubicaciones.length;x++){
            //console.log(ubicaciones[x]);
        }
        iniciarJuego();
        //console.log("La palabra numero: "+numeroPalabra+" sorteada es: " + palabraSorteada);
    }  
});

botonDetenerJuego.addEventListener("click",function(event){
    event.preventDefault();
    detenerJuego();
    vaciarUbicaciones();
    vaciarLetras();
    contadorletras=0;
    fallos=1;
    espacios=0;
    ubicacionX=700;
    juegoIniciado=false;
    pincel.clearRect(0,0,1700,700);
});

botonAgregarPalabra.addEventListener("click",function(event){
    event.preventDefault();
    noIngresarPalabra=true;
    var nuevaPalabraAuxiliar = nuevaPalabra.value;
    banderaMayusculas=validarMayusculas(nuevaPalabraAuxiliar);
    if(banderaMayusculas){
        for(var x=0;x<palabras.length; x++){
            //console.log("Palabra auxiliar: "+nuevaPalabraAuxiliar);
            if(nuevaPalabraAuxiliar==palabras[x]){
                alert("Esta palabra ya se encuentra en el listado de palabras a sortear");
                noIngresarPalabra=false;
                break;
            }                   
        }
        if(noIngresarPalabra){
            alert("La palabra ha sido ingresada exitosamente");
            palabras[(palabras.length)]=nuevaPalabraAuxiliar;
        }            
    }
    banderaMayusculas=true;    
});