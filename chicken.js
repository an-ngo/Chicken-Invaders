class Chicken{
    constructor(){
        this.height=80;
        this.width=80;

        this.x=0
        this.y=0
        //this.x=Math.round(Math.random()*(CANVAS_WIDTH-this.width))
        this.radius = 40;
        this.image = new Image();
        this.bottomLeftX=this.x 
        this.bottomRightX=this.x+this.width 
        this.bottomY=this.y+this.height
        this.speed = 4;
        this.speedY=1;
        this.context=document.getElementById("myCanvas").getContext("2d")
        this.numberImage = Math.floor(Math.random()*3);
        this.centerX=this.x+this.width/2;
        this.centerY=this.y+this.height/2;
        this.imageDestroy = new Image();
        this.HP=1;
    }
    drawChicken(ctx){
        
        this.image.src='./img/chicken'+this.numberImage+'.png'
        this.context.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
    clearChicken(ctx){
        //this.context.clearRect(this.x,this.y,this.width,this.height)
    }
    randomChangeChickenXY(){
        this.x=Math.round(Math.random()*(1200-this.width))
        this.y=Math.round(Math.random()*300)
    }
    getBottomLeftX(){
        return this.x
    }
    getBottomRightX(){
        return this.x+this.width;
    }
    getBottomY(){
        return this.y+this.height;
    }
    isDestroy(index){
        //remove chicken[index]
        let newChicken = arrChickens[index]
        arrChickens[index].clearChicken();
        arrChickens[index].imageDestroy.src='./img/explosion0.png'
        arrChickens[index].context.drawImage(arrChickens[index].imageDestroy,arrChickens[index].x,arrChickens[index].y,arrChickens[index].width,arrChickens[index].height);
        //setTimeout(function(){newChicken.context.clearRect(newChicken.x,newChicken.y,newChicken.width,newChicken.height)},1000)
        arrChickens.splice(index,1);
        // let newChicken = new Chicken();
        // let check=Math.round(Math.random());
        // if(check==1){
        //     newChicken.x=CANVAS_WIDTH - newChicken.width-5;
        // }

        // arrChickens.push(newChicken);

    }
    isChickenONWindow(){
        if(this.x<-this.width||this.y<-this.height){
            return false;
        }
        else return true;
    }

    // drawAndMoveLeftToRight(){
    //     this.clearChicken();
    //     this.x+=this.speed;
    //     this.drawChicken();
    //     if(this.isChickenONWindow){
    //         if(this.x+this.width>=CANVAS_WIDTH||this.x<=0){
    //             this.speed=-this.speed;
    //         }

    //     }else{
    //         this.x+=4;
    //     }
    //     if(this.y<0||this.y+this.height>CANVAS_HEIGHT){
    //         this.speedY=-this.speedY
    //     }
    // }
    drawAndMoveLeftToRight2(){
        if(this.x>=0&&this.x+this.width<CANVAS_WIDTH){
            //this.clearChicken();
            this.x+=this.speed;
            this.y+=this.speedY
            this.drawChicken();
            if(this.x+this.width>=CANVAS_WIDTH||this.x<=0){
                this.speed=-this.speed;
            }

        }else if(this.x<0){
            this.x+=4;
        }else if(this.x+this.width>=CANVAS_WIDTH){
            this.x-=4
        }
        if(this.y<0||this.y+this.height>CANVAS_HEIGHT){
            this.speedY=-this.speedY
        }
    }

    drawAndMove_BossChicken(){
        if(this.y<0){
            this.y+=1;
            this.context.drawImage(this.image,this.x,this.y,this.width,this.height);
            
        }else{
            this.context.drawImage(this.image,this.x,this.y,this.width,this.height);
        }
    }
}