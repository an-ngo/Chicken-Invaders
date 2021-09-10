class Egg{
    constructor(){
        this.width=30;
        this.height=30;
        //this.speedX=defaultBullet.speedX;
        this.speedY=6;
        this.x
        this.y
        //this.directorX=1;
        //this.directorY=1;
        this.context=document.getElementById("myCanvas").getContext("2d")
        this.image=new Image();
        this.image.src='./img/egg.png'
    }

    moveEgg(){
        //this.x-=this.speedX*this.directorX;
        this.y+=this.speedY;
    }
    drawEgg(context){
        this.context.fillStyle=this.color;
        this.context.fillRect(this.x,this.y,this.width,this.height);

    }

    makeArrEggsMove(index){
        if(this.y<CANVAS_HEIGHT){
            this.y+=this.speedY;
            this.context.drawImage(this.image,this.x,this.y,this.width,this.height);
        }else{
            arrEggs.splice(index,1)
        }
    }
}