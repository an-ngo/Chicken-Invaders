const defaultBullet={
    width: 4,
    height: 14,
    color: '#FF0000',
    speedX: 0,
    speedY: 14,

}

class Bullet{
    constructor(){
        //let self=this;

        this.width=defaultBullet.width;
        this.height=defaultBullet.height;
        this.color=defaultBullet.color;
        //this.speedX=defaultBullet.speedX;
        this.speedY=defaultBullet.speedY;
        this.x
        this.y
        //this.directorX=1;
        //this.directorY=1;
        this.context=document.getElementById("myCanvas").getContext("2d")
    }
    changeBullet(newBullet){
        this.width=newBullet.width;
        this.height=newBullet.height;
        this.color=newBullet.color;
        
        this.speedY=newBullet.speedY;
    }
    moveBullet(){
        //this.x-=this.speedX*this.directorX;
        this.y-=this.speedY;
    }
    drawBullet(context){
        this.context.fillStyle=this.color;
        this.context.fillRect(this.x,this.y,this.width,this.height);

    }
    clearBullet(context){
        this.context.clearRect(this.x,this.y,this.width,this.height)
    }
    makeBulletMove(){
        if(this.y+this.height>0){
            //this.clearBullet();
            this.moveBullet();
            this.drawBullet();

        }else{
            this.clearBullet();
            this.x=spaceShip.x+34;
            this.y=spaceShip.y;
        
        }
        //window.requestAnimationFrame(this.makeBulletMove);
    }

    makeArrBulletsMove(index){
        //this.clearBullet();
        if(this.y+this.height>0){
            this.moveBullet();
            this.drawBullet();
        }
        else{
            arrBullets.splice(index,1)
        }
    }

    

    // destroy(){
    //     //check if bullet hit Top canvas
    //     if(this.y<=0){
    //         this.clearBullet();
    //     }
    //     //check if bullet hit arrChickens
    //     for(let i = 0;i<arrChickens.length;i++){
    //         let checkBulletHitChicken=(this.x+this.width>arrChickens[i].x
    //                 &&this.x-this.width<arrChickens[i].x+arrChickens[i].width
    //                 &&this.y<arrChickens[i].y+arrChickens[i].height
    //                 &&this.y>arrChickens[i].y)
                    
    //         if(checkBulletHitChicken){
    //             //delete arrChickens[i];
    //             this.clearBullet();
    //             this.x=spaceShip.x+34;
    //             this.y=spaceShip.y
    //             arrChickens[i].isDestroy(i);

    //         }
    //     }
    // }
}