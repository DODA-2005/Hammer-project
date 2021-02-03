class Iron {
    constructor(x, y) {
      var options = {
          'density':6,
          'friction':0.7,
          'restitution':0.7,
          isStatic:false
         
      };
      this.image=loadImage("iron.png");
      this.body = Bodies.rectangle(x, y, 70, 80, options);
      this.width = 80;
      this.height = 70;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
      strokeWeight("darkgrey");
      stroke("darkgrey");
      fill("lightgrey");
      
      rect(0, 0, this.width, this.height);
      pop()
    }
  }
  