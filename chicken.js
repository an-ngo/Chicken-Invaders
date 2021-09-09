class Chicken{
    constructor(){
        this.height=100;
        this.width=100;

        this.x=0
        this.y=0
        //this.x=Math.round(Math.random()*(CANVAS_WIDTH-this.width))
        
        this.image = new Image();
        this.bottomLeftX=this.x 
        this.bottomRightX=this.x+this.width 
        this.bottomY=this.y+this.height
        this.speed = 4;
        this.context=document.getElementById("myCanvas").getContext("2d")
    }
    drawChicken(ctx){
        this.image.src="/img/greenchicken.png"
        this.context.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
    clearChicken(ctx){
        this.context.clearRect(this.x,this.y,this.width,this.height)
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
        arrChickens[index].clearChicken();
        arrChickens.splice(index,1);
        let chicken = new Chicken();
        arrChickens.push(chicken);

    }

    drawAndMoveLeftToRight(){
        this.clearChicken();
        this.x+=this.speed;
        this.drawChicken();
        if(this.x+this.width>=CANVAS_WIDTH||this.x<=0){
            this.speed=-this.speed;
        }
        
    }
}