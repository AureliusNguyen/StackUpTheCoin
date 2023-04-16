window.onload = function () {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var x = 250;
  var y = 150;
  var coinx = Math.random() * (canvas.width - 50);
  var coiny = Math.random() * (canvas.height - 50);

  var t = Date.now();
  let speed = 300;
  let dir = 0;
  let score = 0;

  let scoreElem = document.getElementById("score");
  scoreElem.innerHTML = "Score: " + score;

  let up = document.getElementById("up");
  let down = document.getElementById("down");
  let left = document.getElementById("left");
  let right = document.getElementById("right");

  up.onmousedown = function () {
    dir = 4;
  };
  down.onmousedown = function () {
    dir = 3;
  };
  left.onmousedown = function () {
    dir = 2;
  };
  right.onmousedown = function () {
    dir = 1;
  };

  up.ontouchstart = function () {
    dir = 4;
  };
  down.ontouchstart = function () {
    dir = 3;
  };
  left.ontouchstart = function () {
    dir = 2;
  };
  right.ontouchstart = function () {
    dir = 1;
  };

  up.onmouseup = function () {
    dir = 0;
  };
  down.onmouseup = function () {
    dir = 0;
  };
  left.onmouseup = function () {
    dir = 0;
  };
  right.onmouseup = function () {
    dir = 0;
  };

  up.ontouchend = function () {
    dir = 0;
  };
  down.ontouchend = function () {
    dir = 0;
  };
  left.ontouchend = function () {
    dir = 0;
  };
  right.ontouchend = function () {
    dir = 0;
  };

  function draw() {
    var timePassed = (Date.now() - t) / 1000;
    t = Date.now();

    context.clearRect(0, 0, canvas.width, canvas.height);

    var image = new Image();
    image.src = "./assets/image.webp";
    context.drawImage(image, x, y, 70, 70);

    var img = new Image();
    img.src = "./assets/coins.png";
    context.drawImage(img, coinx, coiny, 30, 30);

    if (dir == 1) {
      if (x + 50 < canvas.width) {
        x += speed * timePassed;
      }
    } else if (dir == 2) {
      if (x > 0) {
        x -= speed * timePassed;
      }
    } else if (dir == 3) {
      if (y + 50 < canvas.height) {
        y += speed * timePassed;
      }
    } else if (dir == 4) {
      if (y > 0) {
        y -= speed * timePassed;
      }
    }

    if (
      coinx <= x + 70 &&
      x <= coinx + 30 &&
      coiny <= y + 70 &&
      y <= coiny + 30
    ) {
      score++;
      scoreElem.innerHTML = "Score: " + score;
      coinx = Math.random() * (canvas.width - 50);
      coiny = Math.random() * (canvas.height - 50);
    }

    window.requestAnimationFrame(draw);
  }
  draw();
};
