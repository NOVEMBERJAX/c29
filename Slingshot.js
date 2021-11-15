class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //Load all 3 images of Catapult step1
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //Add 2 images of catapult step 2
    image(this.sling1,200,20);
    image(this.sling2,170,20)    

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            //Add color to the rubberband using colozilla step 6
            stroke(48,22,8)
            //Add stroke step 7
            
            //Create first line step 4
            
            //Create second line step 5
            
            //Add rubberband image step 8
            
            //write if condition to draw different line at differenet end points depending upon the postion of the bird.step 9
            if(pointA.x<220)
            {
                strokeWeight(7)
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
                image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }           
            else
            {
                strokeWeight(3)
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y)
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }
            pop();
        }
    }
    
}