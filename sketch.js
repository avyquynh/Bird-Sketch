
// VARIABLE EXPLAINATION ! !
// Code Located at Bottom, Line 224
// When you hover over the character's eye, it will turn the eye and backgroud red 
// and the flashlight will disappear, revealing the character fully

// GLOBAL VARIABLES
  //booleans
    let hideText = false;
    let bkgColorChange = false;
  //colors
    let black = (0,0,0);
    let shade = (41, 30, 24);

function setup() {
  createCanvas(600, 600);
}

function draw() {
// Character Background 
  strokeWeight(3);
  if (hideText == true && bkgColorChange == true){
    background(25, 5, 0);
  }
  else {
    background(59, 77, 53);
    // text
    textSize(120);
    fill(150);
    text('WANTED', 90, 125);
    textFont('Monaco');
  }

  
// CHARACTER
  // head
  beginShape();
    stroke(shade);
    fill(54, 47, 39);
    vertex(210,330);
    vertex(230,310);
    vertex(220,280);
    vertex(230,270);
    vertex(215,260);
    vertex(210,250);
    vertex(195,240);
    vertex(215,235);
    vertex(235,220);
    vertex(220,215);

    //feathers
    vertex(175,210);
    vertex(175,200);
    vertex(125,160);
    vertex(125,145);
    vertex(230,200); 
    vertex(200,150);
    vertex(170,130);
    vertex(125,125);
    vertex(140,115);
    vertex(125,100);
    vertex(175,115);
    vertex(190,120);
    vertex(150,80);
    vertex(170,75);
    vertex(205,120);
    vertex(240,180);
    vertex(265,120);
    vertex(290,75);
    vertex(305,70);
    vertex(315,80);
    vertex(255,180);
    vertex(300,160);

    // back to head
    vertex(325,160);
    vertex(280,180);
    vertex(335,175);
    vertex(365,180);
    vertex(380,175);
    vertex(385,185);
    vertex(400,185);
    vertex(395,190);
    vertex(410,210);
    vertex(415,225);
    vertex(418,250);
    vertex(410,290);
    vertex(385,320);
    vertex(365,330);
    vertex(335,335);
    vertex(315,350);
    vertex(318,360);
    vertex(310,365);
    vertex(313,370);
    vertex(305,375);
    vertex(315,390);
    vertex(300,400);
    endShape();

    
  // beak
    beginShape();
    fill(130, 87, 38);
    vertex(418,250);
    vertex(425,260);
    vertex(435,265);
    vertex(500,300);
    vertex(535,330);
    vertex(550,350);
    vertex(535,345);
    vertex(525,343);
    vertex(470,340);
    vertex(400,330);
    vertex(360,320);
    vertex(350,310);
    vertex(335,310);
    vertex(350,305);
    vertex(360,298);
    vertex(395,280);
    vertex(418,250);
    endShape();

  // beak shading
    beginShape();
    fill(shade);
    vertex(418,250);
    vertex(395,280);
    vertex(360,298);
    vertex(350,305);
    vertex(335,310);
    vertex(350,310);
    vertex(365,310);
    vertex(440,330);
    vertex(515,335);
    vertex(535,345);
    vertex(550,350);
    vertex(540,337);
    vertex(545,345);
    vertex(515,335);
    vertex(440,330);
    vertex(360,305);
    vertex(370,295);
    vertex(400,285);
    vertex(415,255);
    vertex(420,265);
    vertex(500,305);
    vertex(510,313);
    vertex(500,305);
    vertex(420,265);
    vertex(415,255);
    vertex(425,260);
    vertex(418,250);
    endShape();

  // coat body
    beginShape();
    fill(97, 89, 68);
    vertex(0,600);
    vertex(50,480);
    vertex(110,400);
    vertex(140,375);
    vertex(320,430);
    vertex(345,465);
    vertex(360,500);
    vertex(370,555);
    vertex(390,600);
    endShape();

  // coat collar
    beginShape();
    fill(71, 66, 53);
    vertex(140,375);
    vertex(130,370);
    vertex(180,310);
    vertex(195,310);
    vertex(250,340);
    vertex(310,400);
    vertex(330,420);
    vertex(345,465);
    vertex(320,430);
    vertex(140,375);
    endShape();

  // coat outlines
    beginShape();
    fill(33, 29, 24);
    vertex(100,580);
    vertex(120,590);
    vertex(130,600);
    vertex(120,600);
    endShape();

    beginShape();
    fill(33, 29, 24);
    vertex(345,600);
    vertex(350,600);
    vertex(340,580);
    vertex(335,560);
    vertex(330,530);
    vertex(320,500);
    endShape();

    beginShape();
    fill(33, 29, 24);
    vertex(140,470);
    vertex(180,450);
    vertex(200,450);
    vertex(280,465);
    vertex(300,475);
    vertex(280,465);
    vertex(200,450);
    endShape();

    // eye shading
    beginShape();
    stroke(shade);
    strokeWeight(2);
    fill(shade);
    vertex(380,265);
    vertex(350,265);
    vertex(310,220);
    endShape();

// INNER VARIABLES
  let mouseHover = false;
  let eyeCenterX = 345;
  let eyeCenterY = 250;
  let centerW = 300;
  let distance = dist(mouseX, mouseY, eyeCenterX, eyeCenterY); 

// darken scene
  if (distance < 20){
    mouseHover = true;
  }
  else{
    mouseHover = false;
  }
    if (mouseHover == true){
      fill (black,0);
      rect(0,0,600,600);
      hideText = true;
      bkgColorChange = true;
    }
    else {
      fill (black,200);
      rect(0,0,600,600);
      hideText = false;
      bkgColorChange = false;
      // flashlight
      fill(255, 251, 212, 50);
      noStroke();
      ellipse(mouseX, mouseY, centerW, centerW);
    }
  
// hover change
    if (distance < 20) { 
      mouseHover = true;
    } else {
      mouseHover = false;
    }
    beginShape();
      noStroke();
      if (mouseHover) {
        fill('red'); 
      } 
      else {
        fill(190); 
      }
      vertex(365, 260);
      vertex(350, 260);
      vertex(325, 235);
      vertex(365, 260);
    endShape();
      if (mouseHover){
        stroke('red');
        strokeWeight(1);
        line(338, eyeCenterY, 100, eyeCenterY);
      }


}
