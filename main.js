let c=document.getElementById("myCanvas");
let ctx=c.getContext("2d")
let spaceShipImg=document.getElementById('spaceShipImg')
let greenChicken=document.getElementById('greenChickenImg')

let isGameOver=false;
let isShootOutBullet=false;
let isMusicON = false;
let score=0;

//arr of chicken
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




function checkKeyDown(e){
    e=e||window.event;
    if(event.ctrlKey){
        //isShootOutBullet=true;
        shootOutBullet();
    }
    
    if(!isGameOver){    
        spaceShip.clearSpaceShip(ctx)
        // if(!isMusicON){
        //     isMusicON=true;
        //     sound1.play()
        // }
        switch (e.keyCode) {
            
            case 38:
                //up arrow
                // spaceShip.moveSSUp();
                // spaceShip.moveSpaceShip();
                spaceShip.directorY=-1
                spaceShip.directorX=0;
                break;
            
            case 40:
                //down arrow
                // spaceShip.moveSSDown();
                // spaceShip.moveSpaceShip();
                spaceShip.directorY=1;
                spaceShip.directorX=0;

                break;
                
            case 37:
                //left arrow
                // spaceShip.moveSSLeft();
                // spaceShip.moveSpaceShip();
                spaceShip.directorX=-1;
                spaceShip.directorY=0
                break;
                
            case 39:
                //right arrow
                // spaceShip.moveSSRight();
                // spaceShip.moveSpaceShip();
                spaceShip.directorX=1
                spaceShip.directorY=0
                break;
        }
    }
}     
    
// var map = []; // You could also use an array
// onkeydown = onkeyup = function(e){
//     e = e || event; // to deal with IE
//     map[e.keyCode] = e.type == 'keydown';
//     /* insert conditional here */
// }
// function checkKeyDown(){
//         //CODE MAP[] HERE
    
//     if(map[38]){
//         //up
//         spaceShip.directorY=-1;
//         spaceShip.directorX=0;
//     }else if(map[37]){
//         //left
//         spaceShip.directorX=-1;
//         spaceShip.directorY=0;
//     }else if(map[39]){
//         //right
//         spaceShip.directorX=1;
//         spaceShip.directorY=0;
//     }
//     else if(map[40]){
//         //down
//         spaceShip.directorY=1;
//         spaceShip.directorX=0;
//     }
// }

    
function shootOutBullet(){
    let newBullet= new Bullet(defaultBullet);
    //numberOfBullet+=1
    newBullet.x=spaceShip.x+34;
    newBullet.y=spaceShip.y+7;

    arrBullets.push(newBullet);
    
    
}

// function isBulletHitChicken(bullet,chicken){
//     if(bullet.y<=chicken.getBottomY()-5&&bullet.x<chicken.getBottomRightX()-5&&bullet.x>chicken.getBottomLeftX()+5){
//         //isGameOver=true;
//         return true;
//     }
//     else {
//         return false;
        
//     }
// }

// function clearMoveDrawBullet(){
//     if(onlyBullet.y+onlyBullet.height>0){
//         onlyBullet.clearBullet(ctx);
//         onlyBullet.moveBullet();
//         onlyBullet.drawBullet(ctx);
//         window.requestAnimationFrame(clearMoveDrawBullet);
//     }else{
//         onlyBullet.x=spaceShip.x+34;
//         onlyBullet.y=spaceShip.y;
//         window.cancelAnimationFrame(clearMoveDrawBullet);
//     }
// }


    


// function checkWhenBulletHitChicken(){
//     if(!isGameOver){
//         //exampleBullet.moveBullet()

//         if(!isBulletHitChicken(onlyBullet,chicken)){
//             // onlyBullet.clearBullet(ctx)
//             // onlyBullet.moveBullet();
//             // onlyBullet.drawBullet(ctx);
//             chicken.drawChicken(ctx);
//             window.requestAnimationFrame(checkWhenBulletHitChicken)
//         } else {
//             // chicken.clearChicken(ctx)
//             // onlyBullet.clearBullet(ctx)
//             ctx.clearRect(0,0,1200,700)
//             onlyBullet.x=spaceShip.x+34;
//             onlyBullet.y=spaceShip.y
//             chicken.randomChangeChickenXY();
//             window.requestAnimationFrame(checkWhenBulletHitChicken)

//         }
//     }
// }



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
    }
}


function playGame(){
    
    if(!isGameOver){
        ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        spaceShip.drawSpaceShip(ctx);
        shootOutBullet();
        
        //onlyBullet.makeBulletMove();
        game.drawArrChickens_And_MoveLeftToRight();
        game.drawArrBullets_And_MoveUp();
        game.drawGift_And_MoveDown();
        game.createArrEggs();
        
        spaceShip.moveSpaceShip();
        
        game.checkBulletHitChicken();
        game.checkWhen_Chicken_Hit_SpaceShip();
        game.checkGift_Hit_Spaceship();
        game.checkWhen_Egg_Hit_SpaceShip();

        document.getElementById("scoreHere").innerHTML=score;
        document.getElementById('numberRocket').innerHTML=number_Rocket;
        
        window.requestAnimationFrame(playGame)
    }else{
        spaceShip.isDestroy();
        //ctx.drawImage(spaceShip.explosionImg,spaceShip.x,spaceShip.y)
        setTimeout(function(){alert("Game over");},1500)
        sound1.pause()
        sound1.currentTime =0;
        sound2.pause();

    }
    
}



function startGame(){
    //playMusic();
    document.getElementById("button").style='display: none'
    game.createArrChickens();
    document.onkeydown=checkKeyDown
    window.requestAnimationFrame(playGame)
}

//checkWhenBulletHitChicken();
//setInterval(shootOutBullet,10)
//window.requestAnimationFrame(moveBulletFrame)
// backgroundMusic.play()


//startGame();