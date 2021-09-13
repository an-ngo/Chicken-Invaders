let c=document.getElementById("myCanvas");
let ctx=c.getContext("2d")
let spaceShipImg=document.getElementById('spaceShipImg')
let greenChicken=document.getElementById('greenChickenImg')

let isGameOver=true;
let isShootOutBullet=false;
let isMusicON = false;
let score=0;


let arrChickens=[]
let arrGift=[]
let arrBullets=[]
let arrEggs=[]

let chicken = new Chicken(greenChicken)
let spaceShip=new SpaceShip(spaceShipImg);
let game=new Game();

document.getElementById("waveDiv").innerHTML=wave_number;





let sound1 = document.getElementById("backgroundMusic");

let sound2 = document.getElementById("BossMusic")

let explosionSound = document.getElementById('explosionSound')
explosionSound.volume;
let spaceShipExplosion = document.getElementById('spaceShipExplosion')
spaceShipExplosion.set('volume',0.5);


function checkKeyDown(e){
    e=e||window.event;
    if(event.ctrlKey){
        //isShootOutBullet=true;
        destroyAllChickens();
    }
}     
    


    
function shootOutBullet(){
    let newBullet= new Bullet(defaultBullet);
    //numberOfBullet+=1
    newBullet.x=spaceShip.x+34;
    newBullet.y=spaceShip.y+7;

    arrBullets.push(newBullet);
    
    
}





function playMusic(){
    if(!isMusicON){
        sound1.play()
    }
}

function destroyAllChickens(){
    if(number_Rocket>0){
        number_Rocket-=1;
        let l=arrChickens.length
        for(let i=0;i<l;i++){
            arrChickens[0].isDestroy(0);
        }
        explosionSound.pause();
        explosionSound.currentTime = 0;
        explosionSound.play();
    }
}

function moveSpaceShipMouse(e){
    spaceShip.x=event.clientX-45;
    spaceShip.y=event.clientY-35;
    if(!isGameOver){
        spaceShip.drawSpaceShip();
    }
}


function playGame(){
    
    if(!isGameOver){
        ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        spaceShip.drawSpaceShip(ctx);
        
        game.drawArrChickens_And_MoveLeftToRight();
        game.drawArrBullets_And_MoveUp();
        game.drawGift_And_MoveDown();
        game.createArrEggs();
        
        
        game.checkBulletHitChicken();
        game.checkWhen_Chicken_Hit_SpaceShip();
        game.checkGift_Hit_Spaceship();
        game.checkWhen_Egg_Hit_SpaceShip();

        document.getElementById("scoreHere").innerHTML=score;
        document.getElementById('numberRocket').innerHTML=number_Rocket;
        
        window.requestAnimationFrame(playGame)
    }else{
        spaceShip.isDestroy();

        setTimeout(function(){alert("Game over");},1500)
        sound1.pause()
        sound1.currentTime =0;
        sound2.pause();
        spaceShipExplosion.pause();
        spaceShipExplosion.currentTime = 0;
        spaceShipExplosion.play();

    }
    
}



function startGame(){
    isGameOver=false;
    document.getElementById("button").style='display: none'
    game.createArrChickens();
    document.onkeydown=checkKeyDown
    window.requestAnimationFrame(playGame)
}

