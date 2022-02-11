
var palabras = ["SPIDERMAN","DINERO","CARRO","POLIZA","ORACLE","ARAÑA","COMPUTADORA","MONITOR","PERFUME","CASA","LUZ","OSCURIDAD","SOL","AVENIDA","ALURA","LATAM","MESA","BOLILLO","VENTILADOR","DISCO","SILLA","PARED","COLOR","MUSICA","PINTURA","CUADRO","AHORCADO","JUEGO","GANASTE"];
var letras = [];
var ubicaciones = [];
var contadorletras = 0;
var banderaMayusculas = true;
var numeroPalabra=0;
var noIngresarPalabra=true;
var palabraSorteada;
var letraRepetida;
var juegoIniciado=false;
var contadorGanador=0;
var palabraNoEncontrada;
var fallos=1;
var ubicacionX=700;
var contadorLetraRepetida;
var espacios=0;

var botonAgregarPalabra = document.querySelector("#nueva-palabra");
var nuevaPalabra = document.querySelector("#input-nueva-palabra");

var botonIniciarJuego = document.querySelector("#iniciar-juego");
var botonDetenerJuego = document.querySelector("#detener-juego");



document.addEventListener('keydown', (event) => {
    if(juegoIniciado){
        var keyValue = event.key;
        var letraValida;
        //var codeValue = event.code;  
        //console.log("keyValue: " + keyValue);
        
        //console.log("CONTADOR: " + contadorGanador);

        palabraNoEncontrada=true;
        letraValida=validarLetra(keyValue);
        letraRepetida=true;
        if(letraValida){
            for(var x=0; x<letras.length; x++){
                if(keyValue==letras[x]){
                    alert("La letra: "+keyValue+ " ya fue usada anteriormente, favor de intentar con otra letra");
                    letraRepetida=false;
                }
            }
            if(letraRepetida){
                letras[contadorletras]=keyValue;
                contadorletras++;
                contadorLetraRepetida=0; 
                for(var y=0;y<palabraSorteada.length;y++){
                    if(palabraSorteada.charAt(y)==keyValue){
                        //console.log("En el lugar: "+(y+1)+" la letra es igual");
                        crearLetras(keyValue,ubicaciones[y]);
                        contadorLetraRepetida++;
                        if(contadorLetraRepetida==1){
                            crearLetrasUsadas(keyValue,ubicacionX,"black");
                            ubicacionX=ubicacionX+50;
                            espacios++;
                        }                          
                        
                        contadorGanador--;
                        palabraNoEncontrada=false;
                        if(contadorGanador==0){
                            crearGanarPerder(800,"black","Felicidades Ganaste!!");
                            juegoIniciado=false;
                            break;
                        }
                    }
                }
                if(palabraNoEncontrada){
                    crearAhorcado(fallos);
                    if(fallos==9){
                        crearLetrasUsadas(keyValue,ubicacionX,"red");
                        crearGanarPerder(600,"red","Perdiste!!, intentalo de nuevo");
                        juegoIniciado=false;
                    }
                    else{
                        crearLetrasUsadas(keyValue,ubicacionX,"red");
                        ubicacionX=ubicacionX+50;
                        espacios++;
                        fallos++;
                    }
                    //console.log("La letra usada no fue encontrada");
                }
                //console.log("Imprimiendo desde el evento: "+palabraSorteada);
            }    
        }
    } 
}, false);


