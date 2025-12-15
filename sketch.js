let song;
let amp;

function preload() {
  song = loadSound('시작의 아이.mp3');
}

function setup() {
  createCanvas(400, 400);
  amp = new p5.Amplitude();
}

function draw() {
  background(220);

  let level = amp.getLevel();

  textAlign(CENTER, CENTER);
  text('음량: ' + level.toFixed(3), width / 2, height / 2);
}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.loop();
  }
}
