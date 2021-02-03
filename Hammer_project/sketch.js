
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,rubber,rocks, iron
var p1,p2,p3,p4,p5,p6,p7,p8,p9,p0
var ground

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer=new Hammer(300,200);
	ground=new Ground(500,500,1000,30);
	rubber=new Rubber(250,320);
	p0=new Pebbles(280,400);
	p1=new Pebbles(290,411);
	p2=new Pebbles(315,422);
	p3=new Pebbles(340,433);
	p4=new Pebbles(355,444);
	p5=new Pebbles(360,445);
	p6=new Pebbles(385,456);
	p7=new Pebbles(390,467);
	p8=new Pebbles(435,488);
	p9=new Pebbles(430,469);
	iron=new Iron(300,212)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer.body.position.x=mouseX
  hammer.body.position.y=mouseY

	rubber.display();
	hammer.display();
	ground.display();
	p0.display();
	p1.display();
	p2.display();
	p3.display();
	p4.display();
	p5.display();
	p6.display();
	p7.display();
	p8.display();
	p9.display();
	iron.display();
  drawSprites();
}