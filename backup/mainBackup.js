let c=document.getElementById("myCanvas");
let ctx=c.getContext("2d")
let spaceShipImg=document.getElementById('spaceShipImg')
let greenChicken=document.getElementById('greenChickenImg')

let isGameOver=false;
let isShootOutBullet=false


let exampleBullet=new Bullet
let chicken = new Chicken(greenChicken)
let spaceShip=new SpaceShip(spaceShipImg);

let onlyBullet = new Bullet;
onlyBullet.x=spaceShip.x+34;
onlyBullet.y=spaceShip.y+7;

//let bullet2=[]
let numberOfBullet=0








function checkKeyDown(e){
    spaceShip.clearSpaceShip(ctx)
    e=e||window.event;
    if(event.ctrlKey){
        isShootOutBullet=true;
        shootOutBullet();
    }
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
        
        default:
            //spaceShip.shootOutBullet();
            //spaceShip.Bullet.drawBullet(ctx);
            break;
    }
    // if(e.keyCode=='37'){
    //     spaceShip.moveSSLeft();
    // }
}

function isBulletHitChicken(bullet,chicken){
    if(bullet.y<=chicken.getBottomY()-5&&bullet.x<chicken.getBottomRightX()-5&&bullet.x>chicken.getBottomLeftX()+5){
        //isGameOver=true;
        return true;
    }
    else {
        return false;
        
    }
}

function clearMoveDrawBullet(){
    if(onlyBullet.y+onlyBullet.height>0){
        onlyBullet.clearBullet(ctx);
        onlyBullet.moveBullet();
        onlyBullet.drawBullet(ctx);
        window.requestAnimationFrame(clearMoveDrawBullet);
    }else{
        onlyBullet.x=spaceShip.x+34;
        onlyBullet.y=spaceShip.y;
        window.cancelAnimationFrame(clearMoveDrawBullet);
    }
}

//let arrBullet[0]=new Bullet();
function shootOutBullet(){
    //let newBullet= new Bullet;
    
    //numberOfBullet+=1
    if(onlyBullet.y+onlyBullet.height>0){
        onlyBullet.clearBullet(ctx);
        onlyBullet.moveBullet();
        onlyBullet.drawBullet(ctx);
        
    }else{
        onlyBullet.clearBullet(ctx);
        onlyBullet.x=spaceShip.x+34;
        onlyBullet.y=spaceShip.y;
        
    }
    // if(!isBulletHitChicken(onlyBullet,chicken)){
    //     chicken.drawChicken(ctx);
    // }
}

function checkWhenBulletHitChicken(){
    if(!isGameOver){
        //exampleBullet.moveBullet()

        if(!isBulletHitChicken(onlyBullet,chicken)){
            // onlyBullet.clearBullet(ctx)
            // onlyBullet.moveBullet();
            // onlyBullet.drawBullet(ctx);
            chicken.drawChicken(ctx);
            window.requestAnimationFrame(checkWhenBulletHitChicken)
        } else {
            // chicken.clearChicken(ctx)
            // onlyBullet.clearBullet(ctx)
            ctx.clearRect(0,0,1200,700)
            onlyBullet.x=spaceShip.x+34;
            onlyBullet.y=spaceShip.y
            chicken.randomChangeChickenXY();
            window.requestAnimationFrame(checkWhenBulletHitChicken)

        }
    }
}








function playGame(){
        spaceShip.drawSpaceShip(ctx);
        //moveBulletFrame(spaceShip);
        //chicken.drawChicken(ctx)

        
        

        window.requestAnimationFrame(playGame)
    
}


checkWhenBulletHitChicken();
playGame()
setInterval(shootOutBullet,10)
//window.requestAnimationFrame(moveBulletFrame)
//window.requestAnimationFrame(playGame)

document.onkeydown=checkKeyDown