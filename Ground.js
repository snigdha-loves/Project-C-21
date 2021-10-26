class Ground{
    constructor (x,y,width,height){
        var options={
            isStatic : true
        }
        this.x = x
        this.y = y
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add (world, this.body)
    }
    display(){
        var groundPos = this.body.position
        push()
        translate(groundPos.x, groundPos.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill ("white")
        rect(0,0, this.width, this.height)
        pop()
    }
}