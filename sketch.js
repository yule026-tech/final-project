let song;

function preload() {
  song = loadSound('청춘만화.mp3');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textAlign(CENTER, CENTER);
  text('클릭하면 음악 재생/정지', width / 2, height / 2);
}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.loop();
  }
}
