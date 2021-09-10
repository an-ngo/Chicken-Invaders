const CANVAS_WIDTH = 1200
const CANVAS_HEIGHT = 700

let number_chicken_per_wave = 3;
let wave_number = 1;

class Game{
    constructor(){  
        let self = this;
        this.over = false;
        this.ready
        //this.spaceShip = new SpaceShip();
        this.bullet = new Bullet();
        this.context = document.getElementById("myCanvas").getContext("2d")
        
    }
    createArrChickens(){
        for(let i=0;i<number_chicken_per_wave;i++){
            this.chicken = new Chicken();
            if(Math.round(Math.random())){
                this.chicken.x=-120*i
            }else {
                this.chicken.x=CANVAS_WIDTH+120*i;
            }
            //this.chicken.x=Math.round(Math.random()*CANVAS_WIDTH-this.chicken.width)+this.chicken.width
            arrChickens.push(this.chicken);
        }
        //this.arrChickens=arrChickens;
    }

    prepareNextWave(){
        number_chicken_per_wave+=2;
        wave_number+=1;
        this.createArrChickens();
        document.getElementById("waveDiv").innerHTML=wave_number;
    }

    drawArrChickens_And_MoveLeftToRight(){
        if(arrChickens.length>0){
            for(let i=0;i<arrChickens.length;i++){

                arrChickens[i].drawAndMoveLeftToRight2()
            
            }
        }
        else{
            this.prepareNextWave();
        }
        
    }


    drawArrBullets_And_MoveUp(){
        for(let i=0;i<arrBullets.length;i++){
            arrBullets[i].makeArrBulletsMove(i);
        }
    }



    destroy(){
        //check if bullet hit Top canvas
        // if(onlyBullet.y<=0){
        //     onlyBullet.clearBullet();
        // }
        //check if bullet hit arrChickens
        for(let j=0;j<arrBullets.length;j++){
            for(let i = 0;i<arrChickens.length;i++){
            let checkBulletHitChicken=(arrBullets[j].x+arrBullets[j].width>arrChickens[i].x
                    &&arrBullets[j].x<arrChickens[i].x+arrChickens[i].width
                    &&arrBullets[j].y<arrChickens[i].y+arrChickens[i].height
                    &&arrBullets[j].y>arrChickens[i].y)
                    
            if(checkBulletHitChicken){
                //delete arrChickens[i];
                arrBullets[j].clearBullet();
                arrBullets[j].x=spaceShip.x+34;
                arrBullets[j].y=spaceShip.y;
                score+=1;
                arrChickens[i].isDestroy(i);

            }
        }
        }
    }

    checkWhen_Chicken_Hit_SpaceShip(){
        for(let i=0;i<arrChickens.length;i++){
            if(spaceShip.x+spaceShip.width-5>arrChickens[i].x
                &&spaceShip.x+5<arrChickens[i].x+arrChickens[i].width
                &&spaceShip.y+5<arrChickens[i].y+arrChickens[i].height
                &&spaceShip.y+spaceShip.height/2-5>arrChickens[i].y){
                isGameOver=true;
                
            }
        }
    }

    // start(){
    //     this.createArrChickens();
    //     if(this.over){
    //         //gameOver setting here

    //     }
    //     else{
    //         //Prepare here
    //         this.context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    //         //callBackGameStart = requestAnimationFrame(this.start)
            

    //     }
        

    // }

}