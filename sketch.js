let xBola = 300
let yBola = 200
let diametro = 15
let raio = diametro / 2;

// velocidade da bola
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6

//barrinha

let barrinhaX = 15
let barrinhaY = 150
let barraDX = 8
let barraDY = 80

//raquete oponente

let oponenteX = 570
let oponenteY = 150
let velocidadeoponente;

// placar

let eu = 0
let pontsoponente = 0

// sons

let raquetada;
let ponto;
let trilha;

let colidiu = false;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
   
}
function setup() {
  createCanvas(600,400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrabola();
  movimentabola();
  verificaColisaoBorda();
  mostraRaquete(barrinhaX,barrinhaY);
  movimentaRaquete();
  //verificaColisaoRaquete();
  colisaominhabibloteca(barrinhaX,barrinhaY)
  colisaominhabibloteca(oponenteX,oponenteY);
  mostraRaquete(oponenteX,oponenteY);
  oponente();
  placar();
  fazerpontos();
}

function mostrabola(){
  circle(xBola,yBola,diametro);      
}

function movimentabola(){
  xBola += velocidadeXBolinha;
  yBola += velocidadeYBolinha;
  
}

function verificaColisaoBorda(){
  
  if(xBola + raio > width || xBola - raio < 0){
    velocidadeXBolinha *= -1;   
  }
  if (yBola + raio > height || yBola - raio < 0){
    velocidadeYBolinha *= -1;
  }
  
}

function mostraRaquete(x,y){
  rect(x,y,barraDX,barraDY);
}

function oponente(x,y){
  rect(oponenteX,oponenteY,barraDX,barraDY);
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    barrinhaY -=10
  }
  if(keyIsDown(DOWN_ARROW)){
    barrinhaY +=10  
  }
}  
  

function verificaColisaoRaquete(){
  if (xBola - raio < barrinhaX + barraDX && yBola - raio < barrinhaY + barraDY && yBola + raio > barrinhaY)
  {
    velocidadeXBolinha *= -1;
  }
}

function colisaominhabibloteca(x,y){ 
  colidiu = collideRectCircle (x,y,barraDX,barraDY,xBola,yBola,raio);barraDX
    if(colidiu){velocidadeXBolinha *= -1;
      raquetada.play();
    }
} 

function oponente(){
  velocidadeoponente = yBola - oponenteY - barraDY /2 -30;
  oponenteY += velocidadeoponente  
}

function placar(){
  stroke(225);
  textAlign(CENTER);
  textSize(16);
  fill(color(205,133,63));
  rect(150,10,40,20);
  fill(255);
  text(eu, 168, 26);
  fill(color(205,133,63));
  rect(450,10,40,20);
  fill(255);
  text(pontsoponente,468,26);
  
}

function fazerpontos(){
  if(xBola > 590){
    eu += 1;
    ponto.play();
  } 
  if(xBola < 10 ){
    pontsoponente += 1;
    ponto.play();
  }
}
