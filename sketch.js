const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var grounds,stage1,stage2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var ubox1,ubox,ubox3,ubox4,ubox5,ubox6,ubox7,ubox8,ubox9;
var hitobject;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    grounds=new Ground(600,585,1400,25);
    stage1=new Ground(600,495,350,10);
    stage2=new Ground(1000,305,300,10);

    box1=new Box(600,465,"blue")
    box2=new Box(640,465,"blue");
    box3=new Box(680,465,"blue");
    box4=new Box(560,465,"blue");
    box5=new Box(520,465,"blue");
    box6=new Box(480,465,"blue");
    box7=new Box(720,465,"blue");
    box8=new Box(600,415,"yellow");
    box9=new Box(640,415,"yellow");
    box10=new Box(680,415,"yellow");
    box11=new Box(560,415,"yellow");
    box12=new Box(520,415,"yellow");
    box13=new Box(600,365,"green");
    box14=new Box(640,365,"green");
    box15=new Box(560,365,"green");
    box16=new Box(600,315,"orange");

    ubox1=new Box(1000,275,"orange");
    ubox2=new Box(960,275,"orange");
    ubox3=new Box(920,275,"orange");
    ubox4=new Box(1040,275,"orange");
    ubox5=new Box(1080,275,"orange");
    ubox6=new Box(1000,225,"pink");
    ubox7=new Box(960,225,"pink");
    ubox8=new Box(1040,225,"pink");
    ubox9=new Box(1000,175,"white");

    hitobject=new Poly(150,400);
    sling=new Launch(hitobject.body,{x:150,y:420});
 
}

function draw(){

    background(0);
    Engine.update(engine);

    grounds.display();
    stage1.display();
    stage2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    ubox1.display();
    ubox2.display();
    ubox3.display();
    ubox4.display();
    ubox5.display();
    ubox6.display();
    ubox7.display();
    ubox8.display();
    ubox9.display();

    hitobject.display();
    sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hitobject.body,{x:mouseX ,y:mouseY})
}

function mouseReleased(){
    sling.fly();
}