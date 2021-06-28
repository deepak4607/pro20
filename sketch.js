function preload(){
bg = loadImage("images/iss.png")
sleep= loadAnimation("images/sleep.png")
brush= loadAnimation("images/brush.png")
gym= loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
eat= loadAnimation("images/eat1.png","images/eat2.png")
drink= loadAnimation("images/drink1.png","images/drink2.png")
bath= loadAnimation("images/bath1.png","images/bath2.png")
move= loadAnimation("images/move.png","images/move1.png")


}













function setup() {
  createCanvas(800,400);
astraunt=  createSprite(300,230);
astraunt.addAnimation("sleeping",sleep)
astraunt.scale=0.1

}

function draw() {
  background(bg);  
  drawSprites();
  textSize(20)
  fill("white")
  text("Instruction",20,35)
  textSize(15)
  text("Up arrow=Brushing",20,55)
  text("Down arrow=Gyming",20,70)
  text("Left arrow=eating",20,85)
  text("Right arrow=Bathing",20,100)
  text("M key=moving",20,115)
  edges=createEdgeSprites()
  astraunt.bounceOff(edges)
  if (keyDown("UP_ARROW")){
    astraunt.addAnimation("brushing",brush)
    astraunt.changeAnimation("brushing")
    astraunt.y=350
    astraunt.velocityX=0
    astraunt.velocityY=0
  }
  if (keyDown("DOWN_ARROW")){
    astraunt.addAnimation("gyming",gym)
    astraunt.changeAnimation("gyming")
    astraunt.y=350
    astraunt.velocityX=0
    astraunt.velocityY=0
  }
  if (keyDown("LEFT_ARROW")){
    astraunt.addAnimation("eating",eat)
    astraunt.changeAnimation("eating")
    astraunt.y=350
    astraunt.x=150
    astraunt.velocityX=0.5
    astraunt.velocityY=0.5

  }
if (keyDown("RIGHT_ARROW")){
    astraunt.addAnimation("bathing",bath)
    astraunt.changeAnimation("bathing")
    astraunt.x=300
    astraunt.velocityX=0
    astraunt.velocityY=0
  }

  if (keyDown("M")){
    astraunt.addAnimation("moving",move)
    astraunt.changeAnimation("moving")
    astraunt.velocityX=1
    astraunt.velocityY=1
  }

}
