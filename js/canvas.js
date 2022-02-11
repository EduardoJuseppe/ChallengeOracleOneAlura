var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "white";
pincel.fillRect(0,0,1700,700);

function crearBase(){
    pincel.fillStyle = "#684E0C";
    pincel.fillRect(100,650,200,30); 
    pincel.fillStyle = "#684E0C";
    pincel.fillRect(150,620,100,30);

}
function crearLetras(letra,ubicacion){
    pincel.beginPath() 
    pincel.fillStyle="black"; 
    pincel.font="bold 40px serif"; 
    pincel.fillText(letra,(ubicacion+10),665); 
}
function crearLetrasUsadas(letra,ubicacion,color){
    if(espacios<15){
        pincel.beginPath() 
        pincel.fillStyle=color; 
        pincel.font="bold 40px serif"; 
        pincel.fillText(letra,(ubicacion),400);
    }
    else{
        if(espacios==15){
            ubicacionX=750
            pincel.beginPath() 
            pincel.fillStyle=color; 
            pincel.font="bold 40px serif"; 
            pincel.fillText(letra,(ubicacionX),460);
        }
        else{
            pincel.beginPath() 
            pincel.fillStyle=color; 
            pincel.font="bold 40px serif"; 
            pincel.fillText(letra,(ubicacion),460);
        }
        
    }
     
}
function crearGanarPerder(ubicacion,color,texto){
    pincel.beginPath() 
    pincel.fillStyle=color; 
    pincel.font="bold 80px serif"; 
    pincel.fillText(texto,ubicacion,100);
}
function crearEspaciosPalabra(inicioX,finalX){
    pincel.beginPath();
    pincel.lineWidth=5;
    pincel.strokeStyle="red";
    pincel.moveTo(inicioX,675); 
    pincel.lineTo(finalX,675);
    pincel.stroke(); //visualizar línea
}
function crearAhorcado(){
    if(fallos==1){
        pincel.fillStyle = "#684E0C";
        pincel.fillRect(185,20,30,600);
    }
    if(fallos==2){
        pincel.fillStyle = "#684E0C";
        pincel.fillRect(185,20,300,30);
    }
    if(fallos==3){
        pincel.fillStyle = "#684E0C";
        pincel.fillRect(485,20,30,100);
    }
    if(fallos==4){    
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.arc(500,178,60, 0, 2*Math.PI);
        pincel.fill();

        pincel.fillStyle = "white";
        pincel.beginPath();
        pincel.arc(500,178,45, 0, 2*Math.PI);
        pincel.fill();
    }
    if(fallos==5){    
        pincel.fillStyle = "black";
        pincel.fillRect(485,237,30,45);

        pincel.fillStyle = "black";
        pincel.fillRect(455,282,90,150);
    }
    if(fallos==6){    
        pincel.fillStyle = "black";
        pincel.fillRect(470,387,25,180);
    }
    if(fallos==7){    
        pincel.fillStyle = "black";
        pincel.fillRect(505,387,25,180);
    }
    if(fallos==8){    
        pincel.fillStyle = "black";
        pincel.fillRect(415,310,45,25);

        pincel.fillStyle = "black";
        pincel.fillRect(415,335,20,65);
    }
    if(fallos==9){    
        pincel.fillStyle = "black";
        pincel.fillRect(545,310,45,25);

        pincel.fillStyle = "black";
        pincel.fillRect(570,335,20,65);

        pincel.beginPath();
        pincel.moveTo(480,155);
        pincel.lineTo(495,170);
        pincel.strokeStyle = "black";
        pincel.lineWidth = 4
        pincel.stroke();

        pincel.beginPath();
        pincel.moveTo(495,155);
        pincel.lineTo(480,170);
        pincel.strokeStyle = "black";
        pincel.lineWidth = 4
        pincel.stroke();

        pincel.beginPath();
        pincel.moveTo(510,155);
        pincel.lineTo(525,170);
        pincel.strokeStyle = "black";
        pincel.lineWidth = 4
        pincel.stroke();

        pincel.beginPath();
        pincel.moveTo(525,155);
        pincel.lineTo(510,170);
        pincel.strokeStyle = "black";
        pincel.lineWidth = 4
        pincel.stroke();

        pincel.beginPath();
        pincel.moveTo(480,205);
        pincel.quadraticCurveTo(500,180,520,205);
        pincel.lineWidth = 5;
        pincel.strokeStyle = 'black';
        pincel.lineCap ='round'
        pincel.stroke();
    }
}


   


    

     




