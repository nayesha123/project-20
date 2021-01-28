var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  
  speed=random(55,90);
  weight=random(500,1600);

car = createSprite(10,200,80,20);

wall = createSprite(1200,200,40,200);
wall.shapeColor = color(80,80,80);

car.velocityX = speed;

if(car.isTouching(wall)){
  car.velocityX = 0;
  var deformation=0.5*weight*speed*speed/22509;
  
  if(deformation>180){
    car.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100){
    car.shapeColor=color(230,230,0);
  }
  if(deformation>180 ){
    car.shapeColor=color(255,0,0);
  }
  if(deformation<100){
    car.shapeColor = color(0,255,0);
  }
  }

}


function draw() {
  background(0,0,0);  
  if(car.isTouching(wall)){
    car.velocityX = 0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColour=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
    }
  
  
  drawSprites();
}