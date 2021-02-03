class Pebbles {
    constructor(x, y) {
      var options = {
          'density':1.6,
          'friction':1.0,
          'restitution':0.5
      };
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 10;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      push()
      translate(pos.x,pos.y)
      rotate(angle)
     
      strokeWeight("darkgrey");
      stroke("darkgrey");
      fill("brown");
      
      circle(0, 0, this.radius);
      pop();
    }
  }
  