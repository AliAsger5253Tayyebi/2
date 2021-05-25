const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var hunter,surviver,area;
var runningSurvivor,standingSurvivor,runningSurvivor2,standingSurvivor2;
var bgimage;
var robot;
var runningRobot,runningRobot2;
var walk2;
var brick;
var wall1;

function preload(){
  runningSurvivor = loadAnimation ("images/surviver/tile000.png","images/surviver/tile001.png","images/surviver/tile002.png"
  ,"images/surviver/tile003.png","images/surviver/tile004.png")

standingSurvivor = loadAnimation("images/surviver/tile009.png")
walk = loadSound ("sound/mixkit-footsteps-in-woods-loop-533.wav")
bgimage = loadImage("images/bg.jpg")
runningSurvivor2 = loadAnimation ("images/surviver2/tile000 (1).png","images/surviver2/tile001 (2).png","images/surviver2/tile002 (1).png"
  ,"images/surviver2/tile003 (1).png","images/surviver2/tile004 (1).png")
  standingSurvivor2 = loadAnimation("images/surviver2/tile005.png")

runningRobot = loadAnimation ("images/robot/robot1.png",
"images/robot/robot2.png",
"images/robot/robot3.png",
"images/robot/robot4.png",
"images/robot/robot5.png",
"images/robot/robot6.png",
"images/robot/robot7.png",
"images/robot/robot8.png")
runningRobot2 = loadAnimation ("images/robot2/robot1.png",
"images/robot2/robot2.png",
"images/robot2/robot3.png",
"images/robot2/robot4.png",
"images/robot2/robot5.png",
"images/robot2/robot6.png",
"images/robot2/robot7.png",
"images/robot2/robot8.png")
walk2 = loadSound("sound/walk of robot.mp3")
brick =loadImage("images/wall2.jpg")





}

function setup(){
  createCanvas(displayWidth+320,displayHeight-40 );
    // engine = Engine.create();
    // world = engine.world;
     
    surviver = createSprite(870,675,50,50);
    
    surviver.addAnimation ("standing",standingSurvivor)
    surviver.addAnimation ("running",runningSurvivor)
    surviver.addAnimation ("standing2",standingSurvivor2)
    surviver.addAnimation ("running2",runningSurvivor2)
    surviver.scale = 0.5;
    surviver.alpha=0.5;
    robot = createSprite(50,350,50,50);
    robot.scale = 0.75;
    robot.velocityX = 0;
    robot2 = createSprite(850,100,50,50);
    robot2.scale = 0.75;
    robot2.velocityX = 0;
    robot3 = createSprite(1650,350,50,50);
    robot3.scale = 0.75;
    robot3.velocityX = 0;
    robot.addAnimation("running3",runningRobot)
    robot.addAnimation("running4",runningRobot2)
    robot2.addAnimation("running3",runningRobot)
    robot2.addAnimation("running4",runningRobot2)
    robot3.addAnimation("running3",runningRobot)
    robot3.addAnimation("running4",runningRobot2)
    wall1 = createSprite(displayWidth/2+180,460,20,300);
    wall1.shapeColor = "brown";
    wall2 = createSprite(250,540,200,20);
    wall2.shapeColor = "brown";
    wall3 = createSprite(1440,540,200,20);
    wall3.shapeColor = "brown";
    wall4 = createSprite(150,400,20,300);
    wall4.shapeColor = "brown";
    wall5 = createSprite(1540,400,20,300);
    wall5.shapeColor = "brown";
    wall6 = createSprite(500,350,20,300);
    wall6.shapeColor = "brown";
    wall7 = createSprite(1200,350,20,300);
    wall7.shapeColor = "brown";
    wall8 = createSprite(140,250,280,20);
    wall8.shapeColor = "brown";
    wall9 = createSprite(1550,250,280,20);
    wall9.shapeColor = "brown";
    wall10 = createSprite(700,300,20,200);
    wall10.shapeColor = "brown";
    wall11 = createSprite(1000,300,20,200);
    wall11.shapeColor = "brown";
    wall10 = createSprite(850,190,319,20);
    wall10.shapeColor = "brown";
    wall13 = createSprite(175,100,350,20);
    wall13.shapeColor = "brown";
    wall14 = createSprite(1510,100,350,20);
    wall14.shapeColor = "brown";
    wall4.alpha=0.2;
    radar1 = new Radar();
    gameState = "serve";
   


    
}

function draw(){
   background(bgimage);
   createEdgeSprites();
   console.log(robot.y)
 // radar1.display();
   if(gameState === "serve"){
     textSize(60);
     fill("black")
     text("PRESS SPACE BAR TO START ",500,150)
   }
   if(keyDown("right") && gameState === "serve"){
    robot2.velocityX = 3;  
    gameState = "play"
  }
   
   if(gameState==="play"){
  robot.velocityY = 3;
  //robot2.velocityX = 3;
  robot3.velocityY = 3;
  if(robot2.x === 1090 && robot2.y === 100 ){
    robot2.velocityX = 0;
    robot2.velocityY = 3;
  }
  // if (robot2.x === 1090&& robot2.y===583){
  //   robot2.velocityY = 0
  //   robot2.velocityX= -9
  //   robot2.changeAnimation("running4",runningRobot2)
  // }
  if (robot2.x === 1090&& robot2.y===583){
    robot2.velocityY = 0
    robot2.velocityX= -3
    //robot2.changeAnimation("running4",runningRobot2)
  }
  if (robot2.x === 930&& robot2.y===583){
    robot2.velocityY = 0
    robot2.velocityX= 3
    //robot2.changeAnimation("running4",runningRobot2)
  }
  
  // if(keyDown("space")){
  //   robot2.velocityX = 0;
  //   robot2.velocityY=0;
  // }
  
   if (keyWentDown(RIGHT_ARROW)){
       surviver.velocityX = 8;
       surviver.changeAnimation("running2",runningSurvivor2);
       walk.play();
   }
   if (keyWentUp(RIGHT_ARROW)){
    surviver.velocityX = 0;
    surviver.changeAnimation("standing2",standingSurvivor2);
    walk.stop();
   }
   
   if (keyWentDown(LEFT_ARROW)){
    surviver.velocityX =- 8;
    surviver.changeAnimation("running",runningSurvivor);
    walk.play();
   

}
if(keyWentUp(LEFT_ARROW)){
    surviver.velocityX =0;
    surviver.changeAnimation("standing",standingSurvivor);
    walk.stop();
   }

   if (keyWentDown(UP_ARROW)){
    surviver.velocityY = -8;
    surviver.changeAnimation("running2",runningSurvivor2);
    walk.play();
}
if (keyWentUp(UP_ARROW)){
 surviver.velocityY = 0;
 surviver.changeAnimation("standing2",standingSurvivor2);
 walk.stop();
}
if (keyWentDown(DOWN_ARROW)){
  surviver.velocityY = 8;
  surviver.changeAnimation("running2",runningSurvivor2);
  walk.play();
}
if (keyWentUp(DOWN_ARROW)){
surviver.velocityY = 0;
surviver.changeAnimation("standing2",standingSurvivor2);
walk.stop();
}
   }

drawSprites();
textSize(50);
fill("black")
  text (mouseX+":"+mouseY+":"+robot2.x+":"+robot2.y,mouseX,mouseY)
}
function keyPressed(){
 
}