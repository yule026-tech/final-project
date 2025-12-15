let song;
let amp;

let barCount = 48;

function preload() {
  song = loadSound('시작의 아이.mp3');
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  amp = new p5.Amplitude();
}

function draw() {
  background(20); 

  let level = amp.getLevel();

  // 중앙 원 (음량에 따라 크기만 변화함)
  let circleSize = map(level, 0, 0.25, 60, 160);

  noStroke();
  fill(20); 
  ellipse(width / 2, height / 2, circleSize);

  let baseRadius = circleSize / 2 + 12;

  // 막대 그래프
  strokeWeight(3);
  let lineLength = 35;
  stroke(200);       

  for (let i = 0; i < barCount; i++) {
    let angle = map(i, 0, barCount, 0, 360);

    let x1 = width / 2 + cos(angle) * baseRadius;
    let y1 = height / 2 + sin(angle) * baseRadius;

    let x2 = width / 2 + cos(angle) * (baseRadius + lineLength);
    let y2 = height / 2 + sin(angle) * (baseRadius + lineLength);

    line(x1, y1, x2, y2); // line() 기본 도형
  }

  // 안내 텍스트
  fill(180);
  noStroke();
  textAlign(CENTER, CENTER);
  text('클릭하면 음악 재생/정지', width / 2, height - 25);
}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.loop();
  }
}
