const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  bob,bob2,bob3,bob4,bob5;
var roof;
var rope,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	bob=new Bob(300,350,50);
	bob2=new Bob(350,350,50);
	bob3=new Bob(400,350,50);
	bob4=new Bob(450,350,50);
	bob5=new Bob(500,350,50);


	roof = new Roof(400,200,300,40);

  	rope = new Rope(bob.body,roof.body,-50*2,100);
  	rope2 = new Rope(bob2.body,roof.body,-25*2,100);
  	rope3 = new Rope(bob3.body,roof.body,-0*2,100);
    rope4 = new Rope(bob4.body,roof.body,25*2,100);
  	rope5 = new Rope(bob5.body,roof.body,50*2,100);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

	bob.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	roof.display();
	
	rope.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	keyPressed();
  
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob.body,bob.body.position,{x:-100,y:-100}); } 
} 




