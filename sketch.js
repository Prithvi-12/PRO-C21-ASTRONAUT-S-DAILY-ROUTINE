var gameBackground,gameBackgroundIMG;
var Astronaut;
var bath,brush,drink,eat,gym,gym2,move,sleep;

function preload(){

  gameBackgroundIMG = loadImage("iss.png");

  bath = loadAnimation("bath1.png","bath2.png");
  brush = loadImage("brush.png");
  drink = loadAnimation("drink1.png","drink2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  gym = loadAnimation("gym1.png","gym2.png");
  gym2 = loadAnimation("gym11.png","gym12.png");
  move = loadAnimation("move.png","move1.png");
  sleep = loadImage("sleep.png");
  
}

function setup() {

  createCanvas(800,400);

  gameBackground = createSprite(400, 200, 50, 50);
  gameBackground.addImage("Background",gameBackgroundIMG);
  gameBackground.scale=0.16;

  Astronaut = createSprite(400,300,0,0);
  Astronaut.scale=0.06125;
  Astronaut.addAnimation("bath",bath);
  Astronaut.addImage("brush",brush);
  Astronaut.addAnimation("drink",drink);
  Astronaut.addAnimation("eat",eat);
  Astronaut.addAnimation("gym",gym);
  Astronaut.addAnimation("gym2",gym2);
  Astronaut.addAnimation("move",move);
  Astronaut.addImage("sleep",sleep);

}

function draw() {

  background(255,255,255); 
  drawSprites();

 edges =createEdgeSprites();
 Astronaut.bounceOff(edges);


  if(keyDown("UP_ARROW")){
    Astronaut.changeAnimation("eat",eat);
    Astronaut.velocityX=0;
    Astronaut.velocityY=0;
    Astronaut.y=210;
    Astronaut.x=400;
  }
  
  if(keyDown("DOWN_ARROW")){
    Astronaut.changeAnimation("gym2",gym2);
    Astronaut.velocityX=0;
    Astronaut.velocityY=0;
    Astronaut.y=310;
    Astronaut.x=400;
  }

  if(keyDown("LEFT_ARROW")){
    Astronaut.changeAnimation("brush",brush);
    Astronaut.velocityX=0;
    Astronaut.velocityY=0;
    Astronaut.y=310;
    Astronaut.x=400;
  }

  if(keyDown("RIGHT_ARROW")){
    Astronaut.changeAnimation("bath",bath);
    Astronaut.velocityX=0;
    Astronaut.velocityY=0;
    Astronaut.y=310;
    Astronaut.x=400;
  }

  if(keyDown("m")){
    Astronaut.velocityX= 2 ;
    Astronaut.velocityY= 2;
  }

  

  if(keyDown("S")){ 
    Astronaut.changeAnimation("sleep",sleep);
    Astronaut.velocityX=0;
    Astronaut.velocityY=0;
    Astronaut.y=290;
    Astronaut.x=420;
  }


  

  fill(255,255,255);

  textSize(30);
  text("Instructions:",50,50);

  textSize(17);
  text("Up Arrow = Eat",20,75);
  text("Down Arrow = gym",20,95);
  text("Left Arrow = Brush",20,115);
  text("Right Arrow= Bathe",20,135);
  text("m key = Move",20,155);
  text("s key = sleep",20,175)

}