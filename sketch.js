var database;
var playerCount;
var form, player, game;
var gameState=0;
var allPlayers;
var car1, car2, car3, car4, cars;
var cbg_img;
var ground, track, car1_img, car2_img, car3_img, car4_img;


function preload(){
cbg_img = loadImage("car racing 1.png");
ground = loadImage("images/ground.png");
track = loadImage("images/track.jpg");
car1_img = loadImage("images/car1.png");
car2_img = loadImage("images/car2.png");
car3_img = loadImage("images/car3.png");
car4_img = loadImage("images/car4.png");


}
function setup(){
    createCanvas(displayWidth-50, displayHeight-130);

    database = firebase.database();

    game=new Game();
    game.getgameState();
    game.start();


}

function draw(){

    if(playerCount === 4){
       game.updategameState(1);
    
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
    
}