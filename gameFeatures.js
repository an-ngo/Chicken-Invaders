const CANVAS_WIDTH = 1200
const CANVAS_HEIGHT = 700

let number_chicken_per_wave = 3;
let wave_number = 1;
let isBoss=false;
let number_Rocket=1;


class Game{
    constructor(){  
        let self = this;
        this.over = false;
        this.ready
        //this.spaceShip = new SpaceShip();
        this.bullet = new Bullet();
        this.context = document.getElementById("myCanvas").getContext("2d")
        this.gift  = new Gift();
        
    }
    createArrChickens(){
        for(let i=0;i<number_chicken_per_wave;i++){
            this.chicken = new Chicken();
            this.chicken.HP=Math.floor(Math.random()*2*wave_number)+1
            if(Math.round(Math.random())){
                this.chicken.x=-120*i
            }else {
                this.chicken.x=CANVAS_WIDTH+120*i;
            }

            let randomY=Math.floor(Math.random()*3);
            this.chicken.y = 100*randomY+3;
            if(Math.round(Math.random())){
                this.chicken.speedY=-this.chicken.speedY
            }
            //this.chicken.x=Math.round(Math.random()*CANVAS_WIDTH-this.chicken.width)+this.chicken.width
            arrChickens.push(this.chicken);
        }
        //this.arrChickens=arrChickens;
    }

    createBossChicken(){
        this.bossChicken = new Chicken();
            this.bossChicken.image.src = './img/chickenBoss.png'
            this.bossChicken.HP=wave_number*100;
            this.bossChicken.width=200;
            this.bossChicken.height=200;
            this.bossChicken.x=450;
            this.bossChicken.y=-200;
            arrChickens.push(this.bossChicken);
            //arrChickens.push(this.bossChicken)
    }

    prepareNextWave(){
        if(wave_number%5!=0&&!isBoss){     //wave 5 is BOSS WAVE
            isBoss=false;
            wave_number+=1;
            number_chicken_per_wave= 3 + wave_number*3;
            this.createArrChickens();
            
        }else{
            wave_number+=1
            sound1.currentTime = 0;
            sound1.pause();
            sound2.play();
            isBoss=true;
            number_chicken_per_wave=3+wave_number*5;
            this.createBossChicken();
            this.createArrChickens();
            
        }
        document.getElementById("waveDiv").innerHTML=wave_number;
        document.getElementById('numberRocket').innerHTML=number_Rocket;
        if(wave_number==2){
            this.gift = new Gift();
            arrGift.push(this.gift)
        }
    }

    drawArrChickens_And_MoveLeftToRight(){

        if(arrChickens.length>0){
            for(let i=0;i<arrChickens.length;i++){

                arrChickens[i].drawAndMoveLeftToRight2();
            
            }
        }
        else{
            isBoss=false;
            setTimeout(this.prepareNextWave(),2000);
        }

        if(isBoss){
            arrChickens[0].drawAndMove_BossChicken();
        }
        
    }

    createArrEggs(){
        for(let i=0;i<arrChickens.length;i++){
            if(arrChickens[i].x+44>spaceShip.x+34&&arrChickens[i].x+34<spaceShip.x+34&&arrChickens[i].y<400){
                let egg = new Egg();
                egg.x=arrChickens[i].x+25;
                egg.y=arrChickens[i].y+arrChickens[i].height-10;
                // egg.image= new Image();
                // egg.image.src='./img/egg.png'
                
                arrEggs.push(egg)
            }
        }
        if(arrEggs.length>0){
            this.drawArrEgg_And_MoveDown();
        }
    }

    drawArrEgg_And_MoveDown(){
        for(let i=0;i<arrEggs.length;i++){
            arrEggs[i].makeArrEggsMove(i);
        }
    }


    drawArrBullets_And_MoveUp(){
        for(let i=0;i<arrBullets.length;i++){
            arrBullets[i].makeArrBulletsMove(i);
        }
    }

    drawGift_And_MoveDown(){
        if(arrGift.length>0){
            arrGift[0].moveAndDrawGift();

            
        }
    }

    checkGift_Hit_Spaceship(){
        let checkGiftHitSS=(this.gift.x+this.gift.width>spaceShip.x
            &&this.gift.x<spaceShip.x+spaceShip.width
            &&this.gift.y<spaceShip.y+spaceShip.height
            &&this.gift.y>spaceShip.y)
        if(checkGiftHitSS){
            number_Rocket+=1;
            arrGift.splice(0,1);
            this.gift.y=-100;
        }
    }

    checkBulletHitChicken(){
        
        for(let j=0;j<arrBullets.length;j++){
            for(let i = 0;i<arrChickens.length;i++){
                let checkBulletHitChicken=(arrBullets[j].x+arrBullets[j].width>arrChickens[i].x
                        &&arrBullets[j].x<arrChickens[i].x+arrChickens[i].width
                        &&arrBullets[j].y<arrChickens[i].y+arrChickens[i].height
                        &&arrBullets[j].y>arrChickens[i].y)

                if(checkBulletHitChicken){
                    //delete arrChickens[i];
                    arrChickens[i].HP-=1
                    arrBullets[j].clearBullet();
                    arrBullets[j].x=spaceShip.x+34;
                    arrBullets[j].y=spaceShip.y;
                    score+=1;
                    if(arrChickens[i].HP<1){
                        arrChickens[i].isDestroy(i);
                    }

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