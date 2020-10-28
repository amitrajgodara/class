
var database;
var gameState=0,playerCount;
var form,player,game;
var car1,car2,car3,car4,cars;
function setup(){
    createCanvas(displayWidth,displayHeight);
    database=firebase.database();
   game=new Game();
game.start();
    
}

function draw(){
   
    
    
}
