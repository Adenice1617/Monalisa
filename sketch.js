function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY
function draw() {
  background('#E91E63')
  fill('#00BCD4');
  circle(200,200,300); 
  fill('white')
  circle(150,150,60);
  circle(250,150,60);
  line(150,270,250,270);
  fill('#F076A0')
  triangle(200,180,170,220,220,220);
  line(123,115,178,113);
  line(225,116,279,106);
 // circle(150,150,10);
 // circle(250,150,10);
 
  olhoX = map(mouseX, 0,400, 130,170);
  olhoY = map(mouseY,0,400,130,170);
  circle(olhoX,olhoY,10);
  circle(olhoX+100,olhoY,10)
  if(mouseIsPressed){
     console.log(mouseX,mouseY);
     }
}
