let r = document.getElementById("red");
let y = document.getElementById("yellow");
let g = document.getElementById("green");

function stop() {
  r.style.backgroundColor = "red";
  y.style.backgroundColor = "black";
  g.style.backgroundColor = "black";
}
function wait() {
  y.style.backgroundColor = "yellow";
  r.style.backgroundColor = "black";
  g.style.backgroundColor = "black";
}
function go() {
  g.style.backgroundColor = "green";
  y.style.backgroundColor = "black";
  r.style.backgroundColor = "black";
}
function reset() {
  r.style.backgroundColor = "black";
  y.style.backgroundColor = "black";
  g.style.backgroundColor = "black";
}
