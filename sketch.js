

var bullet,wall;
var wallR,wallB,bulleti;

var speed, weight; 
var thickness

function preload () {
wallR=loadImage('wall red.png')
wallB=loadImage('wall Broken.png')
bulleti=loadImage('bullet.png')
}
function setup() {
  createCanvas(1000, 400);


	speed=random(55,90)
	weight=random(400,1500)
    thickness=random(20,90)

	bullet=createSprite(50, 200, 50,50);   
	bullet.addImage(bulleti);
	
	bullet.velocityX = speed;

	bullet.shapeColor='white';
bullet.scale=0.3;

  
  	wall=createSprite(800,250, thickness, 350)
	  wall.shapeColor='brown'
	  wall.scale=2;
}


function draw() {
  background(0);

  if(wall.x-bullet.x < bullet.width/2+wall.width/2 )
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
	if(damage>10)
	{
		wall.scale=1;
		wall.shapeColor=color(255,0,0);
		wall.addImage(wallB)
	    
	}

		if(damage<10)
	{
		wall.addImage(wallR)
		wall.shapeColor=color(0,255,0);
		
	}
  }  
  
  drawSprites();
 
}


