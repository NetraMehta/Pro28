class Rock{
    constructor(x, y, width, height){
        var options = {
            restitution:0.0,
            friction:1.0,
            density:1.2
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Project-28-Images/stone.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push();
        translate(pos.x, pos.y);
        rotate(angle);

        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    }
}