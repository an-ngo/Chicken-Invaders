class Gift{
    constructor(){
        this.x=Math.floor(Math.random()*800)+200
        this.y=-50
        this.speedY=1
        this.img = new Image();
        this.img.src = "./img/gift0.png"
        this.width=50
        this.height=50
        this.context=this.context=document.getElementById("myCanvas").getContext("2d")
    }
    moveAndDrawGift(){
        //this.context.clearRect(this.x,this.y,this.width,this.height);
        this.y+=this.speedY;
        this.context.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}