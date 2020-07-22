var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box,box1,box2;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	box = createSprite(340, 625, 20, 90);
	box.shapeColor = "red";

	box1 = createSprite(410, 655, 150, 30);
	box1.shapeColor = "red";

	box2 = createSprite(480, 625, 20, 90);
	box2.shapeColor = "red";

	packageSprite=createSprite(400, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400, 200 , 5 , {restitution:0.0, isStatic:true, friction : 0});
	World.add(world, packageBody);
	
	box1 = Bodies.rectangle(width/2, 625, width, 10, {isStatic:true} );
	World.add(world, box1);

	box2 = Bodies.rectangle(width/2, 650, width, 10, {isStatic:true} );
 	World.add(world, box2);

	box3 = Bodies.rectangle(width/2, 625, width, 10, {isStatic:true} );
 	World.add(world, box3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}
