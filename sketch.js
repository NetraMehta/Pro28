const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;

var boy;
var boyImg;

var tree;
var treeImg;

var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var mango8;
var mango9;
var mango10;
var mango11;
var mango12;
var mango13;
var mango14;
var mango15;
var mango16;
var mango17;
var mango18;
var mango19;
var mango20;
var mango21;
var mango22;
var mango23;
var mango24;
var mango25;
var mango26;
var mango27;
var mango28;
var mango29;
var mango30;
var mango31;
var mango32;
var mango33;

var rock;

var slingShot

function preload(){
	treeImg = loadImage("Project-28-Images/tree.png");

	boyImg = loadImage("Project-28-Images/boy.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 675, 2000, 50);

	boy = createSprite(365, 565, 150, 350);
	boy.addImage(boyImg);
	boy.scale = 0.15;

	tree = createSprite(900, 350, 350, 650);
	tree.addImage(treeImg);
	tree.scale = 0.5;

	mango1 = new Mango(670, 275);
	mango2 = new Mango(760, 185);
	mango3 = new Mango(860, 225);
	mango4 = new Mango(770, 295);
	mango5 = new Mango(740, 220);
	mango6 = new Mango(790, 245);
	mango7 = new Mango(715, 270);
	mango8 = new Mango(820, 300);
	mango9 = new Mango(810, 195);
	mango10 = new Mango(875, 270);
	mango11 = new Mango(690, 220);
	mango12 = new Mango(855, 165);
	mango13 = new Mango(920, 270);
	mango14 = new Mango(800, 130);
	mango15 = new Mango(845, 110);
	mango16 = new Mango(905, 210);
	mango17 = new Mango(900, 140);
	mango18 = new Mango(905, 85);
	mango19 = new Mango(950, 170);
	mango20 = new Mango(975, 135);
	mango21 = new Mango(975, 285);
	mango22 = new Mango(950, 105);
	mango23 = new Mango(1005, 155);
	mango24 = new Mango(1005, 200);
	mango25 = new Mango(1030, 250);
	mango26 = new Mango(1055, 195);
	mango27 = new Mango(1075, 270);
	mango28 = new Mango(1100, 220);
	mango29 = new Mango(1115, 280);
	mango30 = new Mango(1155, 235);
	mango31 = new Mango (970, 55);
	mango32 = new Mango(1080, 160);
	mango33 = new Mango(960, 235);

	rock = new Rock(155, 405, 50, 50);

	slingShot = new SlingShot(rock.body, {x:290, y:455});

	Engine.run(engine);
  
}


function draw() {
  	background("lightgrey");

	drawSprites();

	fill("black");
	text("Press Space to restart", 50, 50);

	Engine.update(engine);

	detectCollision(mango1, rock);
	detectCollision(mango2, rock);
	detectCollision(mango3, rock);
	detectCollision(mango4, rock);
	detectCollision(mango5, rock);
	detectCollision(mango6, rock);
	detectCollision(mango7, rock);
	detectCollision(mango8, rock);
	detectCollision(mango9, rock);
	detectCollision(mango10, rock);
	detectCollision(mango11, rock);
	detectCollision(mango12, rock);
	detectCollision(mango13, rock);
	detectCollision(mango14, rock);
	detectCollision(mango15, rock);
	detectCollision(mango16, rock);
	detectCollision(mango17, rock);
	detectCollision(mango18, rock);
	detectCollision(mango19, rock);
	detectCollision(mango20, rock);
	detectCollision(mango21, rock);
	detectCollision(mango22, rock);
	detectCollision(mango23, rock);
	detectCollision(mango24, rock);
	detectCollision(mango25, rock);
	detectCollision(mango26, rock);
	detectCollision(mango27, rock);
	detectCollision(mango28, rock);
	detectCollision(mango29, rock);
	detectCollision(mango30, rock);
	detectCollision(mango31, rock);
	detectCollision(mango32, rock);
	detectCollision(mango33, rock);

 	ground.display();

  	boy.display();

  	tree.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	mango13.display();
	mango14.display();
	mango15.display();
	mango16.display();
	mango17.display();
	mango18.display();
	mango19.display();
	mango20.display();
	mango21.display();
	mango22.display();
	mango23.display();
	mango24.display();
	mango25.display();
	mango26.display();
	mango27.display();
	mango28.display();
	mango29.display();
	mango30.display();
	mango31.display();
	mango32.display();
	mango33.display();

	rock.display();

	slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingShot.fly();
}

function detectCollision(fruit, stone){
	fruitBodyPosition = fruit.body.position;
	stoneBodyPosition = stone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, fruitBodyPosition.x, fruitBodyPosition.y);
	if(distance <= fruit.r+stone.width || distance <= fruit.r+stone.height){
		Matter.Body.setStatic(fruit.body, false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(rock.body, {x:290, y:455});

		slingShot.attach(rock.body)
	}
}