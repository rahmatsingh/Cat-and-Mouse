var cat,mouse,catImg1,catImg2,mouseImg1,mouseImg2,together,bg,catAnimation,mouseAnimation
function preload() {
    //load the images here
   
    bg=loadImage("garden.png")
  catImg1=loadAnimation("cat1.png")
  catImg2=loadAnimation("cat4.png")
  mouseImg1=loadAnimation("mouse1.png")
  mouseImg2=loadAnimation("mouse4.png")
  catAnimation = loadAnimation("cat2.png", "cat3.png");
  mouseAnimation = loadAnimation("mouse2.png", "mouse3.png");
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(820,590,50,20);
     cat.addAnimation("catImage", catImg1);
      cat.scale = 0.17;
       mouse = createSprite(130,580,50,20);
      mouse.addAnimation("mouseImage", mouseImg1);
       mouse.scale = 0.17;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.velocityX = 0;
         cat.addAnimation("catSitting", catImg2);
          cat.x = 240;
           cat.changeAnimation("catSitting");
         mouse.addAnimation("mouseHappy", mouseImg2);
          mouse.changeAnimation("mouseHappy");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX = -5; cat.addAnimation("catRunning", catAnimation);
     cat.changeAnimation("catRunning");
      mouse.addAnimation("mouseTeasing", mouseAnimation);
     mouse.frameDelay = 25;
      mouse.changeAnimation("mouseTeasing");
}

}
