
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
var rope6;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var bob6;
var roof1;
var bobDiameter = 50;
function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);

	//Create the Bodies Here.
	roof1 = new Roof(width/2,height/4,375,25);
    bob1 = new Bob(250,300,50);
	bob2 = new Bob(325,300,50);
	bob3 = new Bob(400,300,50);
	bob4 = new Bob(475,300,50);
	bob5 = new Bob(550,300,50);
	rope1 = new Rope(bob1.body,roof1.body,-bobDiameter*3,0);
	rope2 = new Rope(bob2.body,roof1.body,-bobDiameter*1.5,0);
    rope3 = new Rope(bob3.body,roof1.body,-bobDiameter*0,0);
	rope4 = new Rope(bob4.body,roof1.body,-bobDiameter*-1.5,0);
    rope5 = new Rope(bob5.body,roof1.body,-bobDiameter*-3,0);
    
	keyPressed();
}


function draw() {
	rectMode(CENTER);
	background("white");
    
	drawSprites();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
    bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	roof1.display();

}

function keyPressed(){
if(keyCode === RIGHT_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:50,y:45});

}

}



