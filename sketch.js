
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

ground = new Line(400,680,800,10);
ground.shapeColor = ("yellow");	
box2 = new trashcanimage(680,560,170,15);
box1 = new Line(610,520,15,100);
box3 = new Line(750,520,15,100);



paper = new Ball(100,650,25);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
	ground.display();
	
	box1.display();
	box3.display();
   
	paper.display();
 box2.display();
keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyWentDown("UP_ARROW")){
Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-130});
	}
}



