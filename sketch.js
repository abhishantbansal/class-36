var gameState=0,playCount=0;
var database;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  f1 = new Form();
  f1.display()
}

function draw(){
  background("red");
  
  
}

