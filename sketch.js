 var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
 var packageBody,ground, bar, bar1, bar2;
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 function preload()
 {
 helicopterIMG=loadImage("helicopter.png")
 packageIMG=loadImage("package.png")
 }

 function setup() {
 createCanvas(800, 700);
 rectMode(CENTER);
	

 packageSprite=createSprite(width/2, 80, 10,10);
 packageSprite.addImage(packageIMG)
 packageSprite.scale=0.2

 helicopterSprite=createSprite(width/2, 200, 10,10);
 helicopterSprite.addImage(helicopterIMG)
 helicopterSprite.scale=0.6;


 groundSprite=createSprite(width/2, height-35, width,10);
 groundSprite.shapeColor=color(255)


 engine = Engine.create();
 world = engine.world;

 packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
 World.add(world, packageBody);
	
 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 World.add(world, ground);

 bar = Bodies.rectangle(300, 570, 10, 100, {isStatic:true});
 World.add(world, bar);

 bar1 = Bodies.rectangle(500, 570, 10, 100, {isStatic:true});
 World.add(world, bar1);

 bar2 = Bodies.rectangle(395, 615, 200, 10, {isStatic:true});
 World.add(world, bar2);

 bar3 = Bodies.rectangle(400, 600, 180, 10, {isStatic:true});
 World.add(world, bar3);
 bar3.visible = false

 Engine.run(engine);
  
 }


 function draw() {
  rectMode(CENTER);
  background(0);

 fill("red");
 rect(bar.position.x, bar.position.y, 10, 100);
 rect(bar1.position.x, bar1.position.y, 10, 100);
 rect(bar2.position.x, bar2.position.y, 200, 10);
 fill("black")
 rect(bar3.position.x, bar3.position.y, 180, 10);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
 }

 function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 
 Matter.Body.setStatic(packageBody, false);
 packageSprite.x= packageBody.position.x 
 packageSprite.y= packageBody.position.y 
	
  }
 }

