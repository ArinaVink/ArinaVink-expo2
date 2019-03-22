function startTime() {
  var today = new Date();
  var d = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
//  document.getElementById('tiktak').innerHTML =
//  h + ':' + m + ':' + s;
//  var t = setTimeout(startTime, 500);
  document.getElementById('tiktak').innerHTML = d
}

function checkTime(i) {
  if (i < 10) {i = '0' + i; //add zero in front of numbers < 10
  } return i;
}

// function for gedagzeggen klok lezer.
function greetingStatement() {
  var time = new Date().getHours();
  if (time < 12) {
    document.getElementById('fases').innerHTML = 'Have a wonderfull day martians!';
  } else if (time > 12 && time < 17) {
    document.getElementById('fases').innerHTML = 'Enjoy the rest of your afternoon.';
  }   else {
    document.getElementById('fases').innerHTML = 'I hope your day was nice!';
  }
//console.log(time);
}

function moveLogo(){
  TweenMax.fromTo(document.getElementById('spaces'), 6, {x:-300}, {x:0});
}

function moveRocket() {
  var time = new Date().getHours();
//s  time = 14;
  if (time < 15) {
  TweenMax.to(document.getElementById('raket'), 6, {y: -1500}, {y: 100})
  }   else {
  TweenMax.fromTo(document.getElementById('raket'), 6, {y:-500}, {y:0})
  }
}

function backgroundChange(){
  var time = new Date().getHours();
// time = 2;
  if (time < 12) {
  TweenMax.to(document.getElementById('morning'), 6, {opacity:1});
  }else if (time > 12 && time < 17) {
  TweenMax.to(document.getElementById('middag'), 6, {opacity:1});
  }   else {
    TweenMax.to(document.getElementById('avond'), 6, {opacity:2});
  }
}

window.onload = function () {
    startTime();
    greetingStatement();
    moveLogo();
    moveRocket();
    backgroundChange();
  };
