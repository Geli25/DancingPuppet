//currently loading the non-Face version, please view sketch.js for the faceOSC version
//song is the title screen from a music game called Cytus.
//matter
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Constraint=Matter.Constraint;
var Mouse=Matter.Mouse;
var MouseConstraint=Matter.MouseConstraint;

var engine;
var world;

var ground;
var mConstraint;

//graphics
var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;
var p8;
var p9;
var p10;
var p11;
var p12
var p13;
var p14;
var p15;

var r;
var g;
var b;

var rain = [];
var numOfDrops;

var theme;
var amp;

function preload(){
	theme=loadSound("Cytus.mp3");
}
function setup() {
	var canvas=createCanvas(windowWidth,windowHeight);
	//setupOsc(8338, 3334);
	engine=Engine.create();
	world=engine.world;
	Engine.run(engine);
	theme.loop();

	amp=new p5.Amplitude();

	numOfDrops=100;
	for(var i = 0; i < numOfDrops; i++) {
		rain[i] = new Rain();
	}

	var static ={
		isStatic:true
	}

	ground=Bodies.rectangle(200,height,3000,height/10, static);
	World.add(world,ground);

	var circleoptions ={
		restitution:0.8,
		density:10

	}

	//head
	p1=Bodies.circle(windowWidth/2,0,20,circleoptions);
	//console.log(position.x,position.y);
	World.add(world,p1);

	//triangle on top
	p2=Bodies.polygon(windowWidth/2,0,3,30,static);
	World.add(world,p2);

	//triangle on top left
	p0=Bodies.polygon(windowWidth/2-100,0,3,30,static);
	World.add(world,p0);

	//triangle on top right
	p15=Bodies.polygon(windowWidth/2+100,0,3,30,static);
	World.add(world,p15);

	//body1
	p3=Bodies.rectangle(280,0,30,40);
	World.add(world,p3);
	//console.log(p3);

	//body2
	var body2option={
		restitution:0.5
	}
	p4=Bodies.rectangle(300,0,50,30,body2option);
	World.add(world,p4);

	//leftarm
	p5=Bodies.rectangle(250,0,15,45,{restitution:0.5});
	World.add(world,p5);

	//leftarm2
	p6=Bodies.rectangle(250,0,10,45,{restitution:0.8});
	World.add(world,p6);

	//rightarm
	p7=Bodies.rectangle(330,0,15,45,{restitution:0.5});
	World.add(world,p7);

	//rightarm2
	p8=Bodies.rectangle(200,0,10,45,{restitution:0.8});
	World.add(world,p8);

	//leftleg
	p9=Bodies.rectangle(230,200,20,30);
	World.add(world,p9);
	//leftleg2
	p10=Bodies.rectangle(230,200,15,40);
	World.add(world,p10);
	//rightleg
	p11=Bodies.rectangle(270,200,20,30);
	World.add(world,p11);
	//leftleg2
	p12=Bodies.rectangle(270,200,15,40);
	World.add(world,p12);
	//rightleg2

	//first string
	var options1 ={
		bodyA:p1,
		bodyB:p2,
		stiffness:0.2,
		length:150,
	}
	var constraint1=Constraint.create(options1);
	World.add(world,constraint1);

	//top string left
	var options0 ={
		bodyA:p0,
		bodyB:p5,
		pointB:{x:-7,y:+27},
		stiffness:0.2,
		length:200,
	}
	var constraint0=Constraint.create(options0);
	World.add(world,constraint0);

	//top string left
	var optionsr ={
		bodyA:p15,
		bodyB:p7,
		pointB:{x:+7,y:+27},
		stiffness:0.2,
		length:200,
	}
	var constraintr=Constraint.create(optionsr);
	World.add(world,constraintr);

	//second string
	var option2={
		bodyA:p1,
		bodyB:p3,
		pointB:{x:0,y:-20},
		stiffness:0.2,
		length:30
	}
	var constraint2=Constraint.create(option2);
	World.add(world,constraint2);

	//third string
	var option3={
		bodyA:p3,
		bodyB:p4,
		pointA:{x:0,y:+20},
		pointB:{x:0,y:-20},
		stiffness:0.2,
		length:10
	}
	var constraint3=Constraint.create(option3);
	World.add(world,constraint3);

	//fourth string
	var option4={
		bodyA:p3,
		bodyB:p5,
		pointA:{x:-15,y:-27},
		pointB:{x:0,y:-17},
		stiffness:0.2,
		length:10
	}
	var constraint4=Constraint.create(option4);
	World.add(world,constraint4);

	//fifth string
	var option5={
		bodyA:p5,
		bodyB:p6,
		pointA:{x:0,y:+27},
		pointB:{x:0,y:-27},
		stiffness:0.2,
		length:10
	}
	var constraint5=Constraint.create(option5);
	World.add(world,constraint5);

	//sixth string
	var option6={
		bodyA:p3,
		bodyB:p7,
		pointA:{x:+15,y:-27},
		pointB:{x:0,y:-27},
		stiffness:0.2,
		length:10
	}
	var constraint6=Constraint.create(option6);
	World.add(world,constraint6);

	//seventh string
	var option7={
		bodyA:p7,
		bodyB:p8,
		pointA:{x:0,y:+27},
		pointB:{x:0,y:-27},
		stiffness:0.2,
		length:10
	}
	var constraint7=Constraint.create(option7);
	World.add(world,constraint7);

	//eight string
	var option8={
		bodyA:p4,
		bodyB:p9,
		pointA:{x:-17,y:+15},
		pointB:{x:0,y:-15},
		stiffness:0.2,
		length:10
	}
	var constraint8=Constraint.create(option8);
	World.add(world,constraint8);

	//ninth string
	var option9={
		bodyA:p9,
		bodyB:p10,
		pointA:{x:0,y:+15},
		pointB:{x:0,y:-15},
		stiffness:0.2,
		length:15
	}
	var constraint9=Constraint.create(option9);
	World.add(world,constraint9);

	//tenth string
	var option10={
		bodyA:p4,
		bodyB:p11,
		pointA:{x:+17,y:+15},
		pointB:{x:0,y:-15},
		stiffness:0.2,
		length:10
	}
	var constraint10=Constraint.create(option10);
	World.add(world,constraint10);

	//final string
	var option11={
		bodyA:p11,
		bodyB:p12,
		pointA:{x:0,y:+15},
		pointB:{x:0,y:-15},
		stiffness:0.2,
		length:15
	}
	var constraint11=Constraint.create(option11);
	World.add(world,constraint11);


	//mouse constraint stuff
	var canvasmouse=Mouse.create(canvas.elt);
	canvasmouse.pixelRatio=pixelDensity();
	var mouseOptions={
		mouse:canvasmouse
	}
	mConstraint=MouseConstraint.create(engine,mouseOptions);
	World.add(world,mConstraint);

	r=random(0,255);
	g=random(0,255);
	b=random(0,255);

}

function draw() {
  rectMode(CENTER);
  background(0);
  var vol=amp.getLevel();
  var col=map(vol,0,1,60,255);
  //theme.play();

  for(var i = 0; i < numOfDrops; i++) {
    rain[i].fall();
    rain[i].show();
    if(rain[i].reachedBottom()) {
      rain[i].dance();
      rain[i].y = 0;
    }
  }

  fill(255);
  noStroke();
  rect(ground.position.x,ground.position.y,3000,height/10);

  //head
  push();
  rectMode(CENTER);
  fill(col,col/0.25*0.7,col/0.5);
  stroke('#3E3D42');
  strokeWeight(10);
  ellipse(p1.position.x,p1.position.y,col/1.5,col/1.5);
  pop();

  //triangle on top
  push();
  rectMode(CENTER);
  fill(255);
  strokeWeight(10);
  //rotate(p2.angle);
  triangle(p2.position.x+20,p2.position.y+20,p2.position.x-20,20,p2.position.x,p2.position.y);
  pop();

  //triangle on top-left
  push();
  rectMode(CENTER);
  fill(255);
  strokeWeight(10);
  triangle(p0.position.x+20,p0.position.y+20,p0.position.x-20,20,p0.position.x,p0.position.y);
  pop();

  //triangle on top-right
  push();
  rectMode(CENTER);
  fill(255);
  strokeWeight(10);
  triangle(p15.position.x+20,p15.position.y+20,p15.position.x-20,20,p15.position.x,p15.position.y);
  pop();


  //rect body
  push();
  fill('#C7F465');
  stroke('#3E3D42');
  strokeWeight(10);
  translate(p3.position.x,p3.position.y);
  rotate(p3.angle);
  rectMode(CENTER);
  //console.log(p3.angle);
  rect(0,0,30,40);
  pop();

  //rect body2
  push();
  fill('#C54C53');
  stroke('#3E3D42');
  strokeWeight(10);
  translate(p4.position.x,p4.position.y);
  rotate(p4.angle);
  rectMode(CENTER);
  //console.log(p3.angle);
  rect(0,0,50,30);
  pop();

  //leftarm1
  push();
  fill('#C7F465');
  stroke('#3E3D42');
  strokeWeight(10);
  translate(p5.position.x,p5.position.y);
  rotate(p5.angle);
  rectMode(CENTER);
  rect(0,0,15,45);
  pop();

  //leftarm2
  push();
  fill('#C54C53');
  stroke('#3E3D42');
  strokeWeight(10);
  translate(p6.position.x,p6.position.y);
  rotate(p6.angle);
  rectMode(CENTER);
  rect(0,0,10,45);
  ellipse(0,0,25,25);
  pop();


  //rightarm1
  push();
  fill('#f23dff');
  stroke('#3E3D42');
  strokeWeight(10);
  translate(p7.position.x,p7.position.y);
  rotate(p7.angle);
  rectMode(CENTER);
  rect(0,0,15,45);
  pop();

  //rightarm2
  push();
  fill('#45D1C4');
  stroke('#3E3D42');
  strokeWeight(10);
  translate(p8.position.x,p8.position.y);
  rotate(p8.angle);
  rectMode(CENTER);
  rect(0,0,10,45);
  ellipse(0,0,25,25);
  pop();

  //leftleg
  push();
  fill('#45D1C4');
  stroke('#3E3D42');
  strokeWeight(10);
  translate(p9.position.x,p9.position.y);
  rotate(p9.angle);
  rectMode(CENTER);
  rect(0,0,18,30);
  pop();

  //leftleg2
  push();
  fill('#C7F465');
  stroke('#3E3D42');
  strokeWeight(10);
  translate(p10.position.x,p10.position.y);
  rotate(p10.angle);
  rectMode(CENTER);
  rect(0,0,15,40);
  pop();


  //rightleg
  push();
  fill('#f23dff');
  stroke('#3E3D42');
  strokeWeight(10);
  translate(p11.position.x,p11.position.y);
  rotate(p11.angle);
  rectMode(CENTER);
  rect(0,0,18,30);
  pop();

  //leftleg2
  push();
  fill('#45D1C4');
  stroke('#3E3D42');
  strokeWeight(10);
  translate(p12.position.x,p12.position.y);
  rotate(p12.angle);
  rectMode(CENTER);
  rect(0,0,15,40);
  pop();

  //head&triangle line
  push();
  stroke(255);
  strokeWeight(4);
  line(p1.position.x,p1.position.y,p2.position.x,p2.position.y);
  pop();
  

  //left arm line
  push();
  stroke(255);
  strokeWeight(4);
  line(p0.position.x,p0.position.y,p5.position.x-30,p5.position.y+5);
  pop();

  //right arm line
  push();
  stroke(255);
  strokeWeight(4);
  line(p15.position.x,p15.position.y,p7.position.x+30,p7.position.y+5);
  pop();



  if (mConstraint.body){
	  push();
	  var pos=mConstraint.body.position;
	  fill(r,g,b);
	  rectMode(CENTER);
	  ellipse(pos.x,pos.y,20,20);
	  pop();
  	}

}

