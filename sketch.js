var box;
function setup() {
  createCanvas(1200,1200);
  box = createSprite(600,600,50,50);
  box.shapeColor = "white";
}

function draw() 
{
  background(30);

if (keyDown("left")){
box.position.x -=5;
}
if (keyDown("right")){
  box.position.x +=5;
}
if (keyDown("up")){
  box.position.y -=5;
}
if (keyDown("down")){
  box.position.y +=5;
}
      
      
drawSprites();   
}




