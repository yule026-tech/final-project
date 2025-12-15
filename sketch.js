let song;
let amp; 

function preload() {
  song = loadSound('청춘만화.mp3');
}

function setup() {
  createCanvas(400, 400);
  amp = new p5.Amplitude(); // Amplitude 생성
}

function draw() {
  background(220);

  // 현재 음량 값
  let level = amp.getLevel();

  // 음량을 원 크기로 매핑
  let size = map(level, 0, 0.3, 50, 300);

  fill(150);
  noStroke();
  ellipse(width / 2, height / 2, size);

  // 안내 텍스트
  fill(0);
  textAlign(CENTER, CENTER);
  text('클릭하면 음악 재생/정지', width / 2, height - 30);
}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.loop();
  }
}
