class Bob{
constructor(x,y,radius){
var options ={
isStatic: true,
'density': 0.3

}
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;
World.add(world,this.body);

}
display(){
var bob = this.body.position;
push();
translate(bob.x,bob.y);
strokeWeight(4);
stroke("black");
fill("pink");
ellipse(0,0,this.radius);
pop();

}

}

