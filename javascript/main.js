function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('tiktak').innerHTML =
  h + ':' + m + ':' + s;
  var t = setTimeout(startTime, 500);
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


console.log(time);
}

TweenMax.fromTo(document.getElementById('spaces'), 6, {x:-300}, {x:100});

window.onload = function () {
    startTime();
    greetingStatement();
  };
