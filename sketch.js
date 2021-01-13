var wall,car,speed,weight;

function setup() {
  createCanvas(1800,400);

  //the car
  car=createSprite(50,200,50,50);
  car.velocityX = speed ;
  car.shapeColor = color(255);
car.debug = true;
car.visible = true;
  //the wall
  wall=createSprite(1500,200,60,40);
wall.shapeColor=color("white");
wall.debug = true;
wall.visible = true;

  speed=random(55,90);
  weight=random(400,1500);

 
}


function draw() {
  background(0);  

if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=(0.5 * weight * speed* speed)/22509;
  if(deformation>180)
  {
    car.shapeColor=color(230,230,0);
  }

  
  if(deformation<180 && deformation>100) {
  car.shapeColor=color(230,230,0); 
}
  
  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }
  }
  drawSprites();
}