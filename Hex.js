class Hex {

    constructor(x,y) {

        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }

        this.body = Bodies.rectangle(x, y, 0, 0, options);
        this.width = 0;
        this.height = 0;
        this.image = loadImage("hexagon (1).png");
        World.add(world,this.body);

    }

    display() {

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image ,this.body.position.x,this.body.position.y,40,40);
        pop();

    }
}
