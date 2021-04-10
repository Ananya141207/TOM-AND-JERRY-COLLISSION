

var background, backgroundImg;
var cat,catmoving,catImage1;
var mouse,mousemoving,mouseImage1;

function preload() {
  backgroundImg=loadImage("images/garden.png")
   catImage1=loadImage("images/cat1.png")
   mouseImage1=loadImage("images/mouse1.png")
  catmoving=loadImage("images/cat2.png","images/cat3.png")
   mousemoving=loadImage("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,1000);
     
    mouse=createSprite(100,900,40,40);
    mouse.addImage(mouseImage1);
    mouse.scale=0.2;

    cat=createSprite(900,900,40,40);
    cat.addImage(catImage1);
    cat.scale=0.2;
   
   
}

function draw() {

    background(backgroundImg);
   
    if(cat.x-mouse.x < (cat.width-mouse.width)/2){
    
    cat.velocityX=0;
    cat.changeAnimation(catImage1);
    mouse.changeAnimation(mouseImage1);

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

   if(keyCode===LEFT_ARROW){
    
    mouse.addAnimation("mouseTeasing",mousemoving);
    mouse.changeAnimation("mouseTeasing");
   }

    if(keyCode===RIGHT_ARROW){
    
   cat.addAnimation("catMoving",catmoving);
    cat.changeAnimation("catMoving");
    cat.velocityX=-5
      }


  }
