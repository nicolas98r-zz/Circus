document.addEventListener("keydown",function(evento){
		if (evento.keyCode==32) {
			console.log("salta");
		}
		saltar();
})

var canv,ctx;
var charlie = {posY:250,velY:20,grav:10,salto:28,saltando:false};
var imgCharlie = new Image();

function iniciar(){
	canv = document.getElementById("pantalla");
	ctx = canv.getContext("2d");
	imgCharlie.src = "Imagenes/charlie.png";
}

var fps=10;
setInterval(function(){
	jugar();
},1000/10);

function jugar(){
	ctx.clearRect(0,0,640,480);
	ctx.drawImage(imgCharlie,50,charlie.posY);
}

function saltar(){
	charlie.saltando=true;
	charlie.velY=charlie.salto;
}

function gravedad(){
	if (charlie.saltando==true) {
		if (charlie.posY>=250) {
			charlie.saltando=false;
			charlie.vY=0;
			charlie.posY=250;
		} else {
			charlie.vY-=0;
			charlie.posY-=250;
		}
	}
}
