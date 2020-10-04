class Box{
    constructor(x,y,color){
        var ground_options={
            isStatic:false,
            restitution:0.7,
            friction:0.4,
            density:0.8            
            }
        this.body = Bodies.rectangle(x,y,40,50,ground_options);
        this.color=color;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        fill(this.color);
        rectMode(CENTER);
        rect(pos.x,pos.y,40,50)
        pop();
    }
}