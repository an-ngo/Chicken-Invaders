//khai báo lớp Audio
let Sound = function(src) {
    let self = this;
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        self.sound.play();
    }
    this.stop = function() {
        self.sound.pause();
    }
}

let backgroundMusic = new Sound('./sounds/backgroundMusic.mp3')
let BossMusic = new Sound('./sounds/Boss.mp3')

callBack_backgroundMusic = setInterval(function(){
    backgroundMusic.stop();
    let backgroundMusic = new Audio('./sounds/backgroundMusic.mp3');
    backgroundMusic.play();}
    ,310000)