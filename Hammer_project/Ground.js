class Ground {
    constructor(x, y, width, height) {
      var options = {
        'friction':2,
        'mass':90,
        'density':90,
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  