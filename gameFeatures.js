const ONE_WAVE_HAVE_3_CHICKEN = 3
const CANVAS_WIDTH = 1200
const CANVAS_HEIGHT = 700

class Game{
    constructor(){  
        let self = this;
        this.over = false;
        this.ready
        this.spaceShip = new SpaceShip();
        this.bullet = new Bullet();
        this.context = document.getElementById("myCanvas").getContext("2d")
        
    }
    createArrChickens(){
        for(let i=0;i<ONE_WAVE_HAVE_3_CHICKEN;i++){
            this.chicken = new Chicken();
            this.chicken.x=Math.round(Math.random()*CANVAS_WIDTH-this.chicken.width)
            arrChickens.push(this.chicken);
        }
        this.arrChickens=arrChickens;
    }

    drawArrChickens_And_MoveLeftToRight(){
        for(let i=0;i<this.arrChickens.length;i++){
            setTimeout(this.arrChickens[i].drawAndMoveLeftToRight(),2000)
            
        }
        
    }

    start(){
        this.createArrChickens();
        if(this.over){
            //gameOver setting here

        }
        else{
            //Prepare here
            this.context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
            callBackGameStart = requestAnimationFrame(this.start)
            
            


        }
        

    }

}