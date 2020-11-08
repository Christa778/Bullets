var bullet, wall;
var speed, weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet = createSprite(50,200,30,10);
  bullet.shapeColor="white";
  wall = createSprite(1200,185,thickness,height/2);
  wall.shapeColor="gray";

  bullet.velocityX=speed;

}
function draw() {
  background("red");
  
  if(hasCollided(bullet,wall))
  {
      bullet.velocityX=0;
      var damage = 0.5 * weight * speed * speed/(thickness * thickness* thickness);
        if(damage>10)
        {
            wall.shapeColor=color(255,0,0);
        }

        if(damage<10)
        {
            wall.shapeColor=color(0,255,0);
        }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
    bulletRightEdge=lbullet.x + lbullet.width;
    wallLeftEdge=lwall.x;
       if(bulletRightEdge>=wallLeftEdge)
       {
           return true
       }
        return false;
}