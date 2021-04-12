class Mango{
    constructor(x, y){
        var options = {
            isStatic:true,
            restitution:0.0,
            friction:1.0
        }

        this.body = Bodies.circle(x, y, 10, options);
        this.x = x;
        this.y =y;
        this.r = 10
        this.image = loadImage("Project-28-Images/mango.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 35, 35);
    }
}