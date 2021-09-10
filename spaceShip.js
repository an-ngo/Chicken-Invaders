class SpaceShip{
    constructor(){
        let sefl=this;

        this.x=500
        this.y=500
        this.speedX=3
        this.speedY=5
        this.radius=10;
        this.image=new Image();
        this.width=70;
        this.height=130;
        this.canonOfSpaceShip_X=this.x+34;
        this.context=document.getElementById("myCanvas").getContext("2d")
        this.directorX=1;
        this.directorY=1;
        
        
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
        this.x+=this.speedX*this.directorX;
        this.y+=this.speedY*this.directorY;
        if(this.x<0) this.x=0;
        else if(this.x+this.width>1200) this.x=1200-this.width;
        if(this.y<0) this.y=0;
        else if(this.y+this.height/2>700) this.y=700-this.height/2;
    }
    drawSpaceShip(){
        this.image.src="./img/spaceShip3.png"
        this.context.drawImage(this.image,56,10,114,288,this.x,this.y,this.width,this.height)
        // this.image.src="/img/spaceShip.jpg"
        // this.context.drawImage(this.image,4,4,95,230,this.x,this.y,this.width,this.height)
    }
    clearSpaceShip(){
        this.context.clearRect(this.x,this.y,this.width,this.height)
    }
    isDestroy2(){
        this.clearSpaceShip();
        explosionImg = new Image();
        explosionImg.src = './img/explosion0.png'
        this.context.drawImage(this.explosionImg,this.x+100,this.y+100,this.width,this.height)
    }
    isDestroy() {
        this.clearSpaceShip();
        let draw = () => ctx.drawImage(this.img, this.x, this.y, 100, 100);
        this.img = new Image();
        this.img.onload = draw;
        this.img.src = './img/explosion0.png';
    }

}