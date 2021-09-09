class SpaceShip{
    constructor(){
        let sefl=this;

        this.x=200
        this.y=500
        this.speedX=10
        this.speedY=5
        this.radius=10;
        this.image=new Image();
        this.width=70;
        this.height=130;
        this.canonOfSpaceShip_X=this.x+34;
        this.context=document.getElementById("myCanvas").getContext("2d")
        
    }
    // shootOutBullet(){
    //     let bullet = new Bullet;
    //     bullet.x=this.canonOfSpaceShip_X;
    //     bullet.y=this.y-bullet.height;
    //     bullet.makeBulletMove(this.context);
    // }
    moveSSLeft(){
        this.x-=this.speedX
    }
    moveSSRight(){
        this.x+=this.speedX
    }
    moveSSUp(){
        this.y-=this.speedY;
    }
    moveSSDown(){
        this.y+=this.speedY
    }
    moveSpaceShip(){
        // this.moveSSDown();
        // this.moveSSLeft();
        // this.moveSSRight();
        // this.moveSSUp();
        if(this.x-this.radius<0) this.x=this.radius;
        else if(this.x+this.radius>1200) this.x=1200-this.radius;
        if(this.y-this.radius<0) this.y=this.radius;
        else if(this.y+this.radius>700) this.y=700-this.radius;
    }
    drawSpaceShip(ctx){
        this.image.src="/img/spaceShip.jpg"
        this.context.drawImage(this.image,4,4,96,235,this.x,this.y,this.width,this.height)
    }
    clearSpaceShip(ctx){
        this.context.clearRect(this.x,this.y,this.width,this.height)
    }

}