class Dustbin {
constructor(x,y){
this.x=x;
this.y=y;
this.dw=200;
this.dh=200;
this.wthickness= 20;
var options={
isStatic:true

}
this.dustbinImage = loadImage("dustbingreen.png");


display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.dustbinImage,0,0,this.dw,this.dh);
    pop();


}

}
}
