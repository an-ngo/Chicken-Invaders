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

let arrBullets=[]
let numberOfBullet=0

let chicken = new Chicken(greenChicken)
let spaceShip=new SpaceShip(spaceShipImg);
let game=new Game();

document.getElementById("waveDiv").innerHTML=wave_number;





let sound1 = document.getElementById("backgroundMusic");
let sound2 = document.getElementById("BossMusic")

// var map = []; // You could also use an array
// onkeydown = onkeyup = function(e){
//     e = e || event; // to deal with IE
//     map[e.keyCode] = e.type == 'keydown';
//     /* insert conditional here */
// }


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
                spaceShip.moveSSUp();
                spaceShip.moveSpaceShip();
                break;
            
            case 40:
                //down arrow
                spaceShip.moveSSDown();
                spaceShip.moveSpaceShip();
                break;
                
            case 37:
                //left arrow
                spaceShip.moveSSLeft();
                spaceShip.moveSpaceShip();
                break;
                
            case 39:
                //right arrow
                spaceShip.moveSSRight();
                spaceShip.moveSpaceShip();
                break;
        }
    }
}     
    //CODE MAP[] HERE
    // if(map[37]&&map[39]){
    //     //up right 
    //     spaceShip.moveSSUp();
    //     spaceShip.moveSSRight();
    //     spaceShip.moveSpaceShip();
    // }
    // else if(map[37]&&map[38]){
    //     //up left              WORK
    //     spaceShip.moveSSUp();
    //     spaceShip.moveSSLeft(); 
    //     spaceShip.moveSpaceShip();
    // }
    // else if(map[40]&&map[38]){
    //     //down left
    //     spaceShip.moveSSDown();
    //     spaceShip.moveSSLeft();
    //     spaceShip.moveSpaceShip();
    // }
    // else if(map[40]&&map[39]){
    //     //down right           WORK
    //     spaceShip.moveSSDown();
    //     spaceShip.moveSSRight();
    //     spaceShip.moveSpaceShip();
    // }
    // else if(map[38]&&!map[37]&&!map[39]){
    //     //up
    //     spaceShip.moveSSUp();
    //     spaceShip.moveSpaceShip();
    // }else if(map[37]){
    //     spaceShip.moveSSLeft();
    //     spaceShip.moveSpaceShip();
    // }else if(map[39]){
    //     spaceShip.moveSSRight();
    //     spaceShip.moveSpaceShip();
    // }
    // else if(map[40]){
    //     spaceShip.moveSSDown();
    //     spaceShip.moveSpaceShip();
    // }

    
function shootOutBullet(){
    let newBullet= new Bullet;
    //numberOfBullet+=1
    newBullet.x=spaceShip.x+34;
    newBullet.y=spaceShip.y+7;

    arrBullets.push(newBullet);
    
    // if(onlyBullet.y+onlyBullet.height>0){
    //     onlyBullet.clearBullet(ctx);
    //     onlyBullet.moveBullet();
    //     onlyBullet.drawBullet(ctx);
        
    // }else{
    //     onlyBullet.clearBullet(ctx);
    //     onlyBullet.x=spaceShip.x+34;
    //     onlyBullet.y=spaceShip.y;
        
    // }
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



function playGame(){
    
    if(!isGameOver){
        ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        spaceShip.drawSpaceShip(ctx);

        game.destroy();
        game.drawArrChickens_And_MoveLeftToRight();

        //onlyBullet.makeBulletMove();
        game.drawArrBullets_And_MoveUp();

        game.checkWhen_Chicken_Hit_SpaceShip();
        document.getElementById("scoreHere").innerHTML=score;
        
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