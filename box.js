
  class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
     this.Viibility=255
      }
      display(){
        console.log(this.body.speed)
       if(this.body.speed>10){
        push();
        World.remove(world,this.body)
           tint(0, 153, 204, 126);
      this.Visiblity = this.Visiblity-1;
      image(this.image,this.body.position.x,this.body.position.y,20,30)
      pop();
      }
       else{
     
      var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
       
      }
    }