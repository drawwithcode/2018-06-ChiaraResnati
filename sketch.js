
var i = 0;
var num = 1;

function preload() {
  myData = loadJSON('./assets/js/dataset.json');
  img1 = loadImage("assets/img/pixel01.jpg");  // Load the image
  img2 = loadImage("assets/img/pixel02.jpg");  // Load the image
  img3 = loadImage("assets/img/pixel03.jpg");  // Load the image
  img4 = loadImage("assets/img/pixel04.jpg");  // Load the image
  img5 = loadImage("assets/img/pixel05.jpg");  // Load the image
  img6 = loadImage("assets/img/pixel06.jpg");  // Load the image
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textFont('Quicksand');
  textAlign(LEFT);
  textStyle(BOLD);

}



function draw() {
  textSize(15);

  fill(myData.pixelStuff[0].color);
  rect(0, 0, width/6, height);
  fill(myData.pixelStuff[1].color);
  rect(width/6, 0, width/6, height);
  fill(myData.pixelStuff[2].color);
  rect(width/6*2, 0, width/6, height);
  fill(myData.pixelStuff[3].color);
  rect(width/6*3, 0, width/6, height);
  fill(myData.pixelStuff[4].color);
  rect(width/6*4, 0, width/6, height);
  fill(myData.pixelStuff[5].color);
  rect(width/6*5, 0, width/6, height);

  image(img1, 0, 100, width/6, width/6);
  image(img2, width/6, 100, width/6, width/6);
  image(img3, width/6*2, 100, width/6, width/6);
  image(img4, width/6*3, 100, width/6, width/6);
  image(img5, width/6*4, 100, width/6, width/6);
  image(img6, width/6*5, 100, width/6, width/6);

  fill("white")

  if ((mouseX > 0) && (mouseX < width/6)){
    text(myData.pixelStuff[0].title, 20, 400, width/7);
    text('cuteness: ' + myData.pixelStuff[0].cuteness, 20, 450);
  } else if ((mouseX > width/6) && (mouseX < width/6*2)) {
    text(myData.pixelStuff[1].title, width/12*2 + 20, 400, width/7);
    text('cuteness: ' + myData.pixelStuff[1].cuteness, width/12*2 + 20, 450);
  } else if ((mouseX > width/6*2) && (mouseX < width/6*3)) {
    text(myData.pixelStuff[2].title, width/12*4 + 20, 400, width/7);
    text('cuteness: ' + myData.pixelStuff[2].cuteness, width/12*4 + 20, 450);
  } else if ((mouseX > width/6*3) && (mouseX < width/6*4)) {
    text(myData.pixelStuff[3].title, width/12*6 + 20, 400, width/7);
    text('cuteness: ' + myData.pixelStuff[3].cuteness, width/12*6 + 20, 450);
  } else if ((mouseX > width/6*4) && (mouseX < width/6*5)) {
    text(myData.pixelStuff[4].title, width/12*8 + 20, 400, width/7);
    text('cuteness: ' + myData.pixelStuff[4].cuteness, width/12*8 + 20, 450);
  } else if ((mouseX > width/6*5) && (mouseX < width)) {
    text(myData.pixelStuff[5].title, width/12*10 + 20, 400, width/7);
    text('cuteness: ' + myData.pixelStuff[5].cuteness, width/12*10 + 20, 450);
  }




 textSize(50);
 text("MY CAT'S ADVENTURES (hover for the plot)", 20, 70);

 }
