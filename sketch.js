var cat , catimg1 , catimg2 ,catimg3
var mouse , mouseimg1 , bgimg , bg , mouseimg2 , mouseimg3

function preload() {
    //load the images here
    bgimg = loadImage("images/garden.png")
    catimg1 = loadAnimation("images/cat1.png")
    mouseimg1 = loadAnimation("images/mouse1.png")
    catimg2 = loadAnimation("images/cat2.png" , "images/cat3.png")
    mouseimg2 = loadAnimation("images/mouse2.png" , "images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    bg = createSprite(500,300,500,400)
    bg.addImage("aa" , bgimg)

    mouse = createSprite(230,450,20,20)
    mouse.addAnimation("a" , mouseimg1)
    mouse.scale=0.2
    cat = createSprite(800 , 450 ,20 ,20)
    cat.addAnimation("e" , catimg1)
    cat.scale=0.2
    //create tom and jerry sprites here

}

function draw() {
   
    background(0)
    //Write condition here to evalute if tom and jerry collide

if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    mouse.changeAnimation("happy" , mouseimg1)
}

    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW){
  mouse.addAnimation("mouseTeasing" , mouseimg2);
  mouse.changeAnimation("mouseTeasing");
  mouse.frameDelay = 25;
  cat.x = cat.x-2
}
   
}
