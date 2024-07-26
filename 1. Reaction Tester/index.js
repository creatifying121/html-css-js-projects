var start = new Date().getTime();

function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function moveShape() {
  var top;
  var left;
  var wh;

  top = Math.random() * 200;
  left = Math.random() * 500;
  wh = Math.floor(Math.random() * 400 + 100);

  // console.log(top, left, wh);
  document.getElementById("shape").style.backgroundColor = getRandomColor();
  document.getElementById("shape").style.top = top + "px";
  document.getElementById("shape").style.left = left + "px";
  document.getElementById("shape").style.width = wh + "px";
  document.getElementById("shape").style.height = wh + "px";

  document.getElementById("shape").style.display = "block";

  start = new Date().getTime();
}
moveShape();

document.getElementById("shape").onclick = function () {
  document.getElementById("shape").style.display = "none";
  var end = new Date().getTime();
  var timeTaken = (end - start) / 1000;
  alert(timeTaken);
  moveShape();
};
