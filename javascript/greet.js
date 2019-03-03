// function for gedagzeggen klok lezer.
function greetingStatement() {
  var time = new Date().getHours();
  if (time < 12) {
    document.getElementById('fases').innerHTML = 'Have a wonderfull day martians!';
  } else if (time > 12 && time < 17) {
    document.getElementById('fases').innerHTML = 'Enjoy the rest of your day.';
  } else {
    document.getElementById('fases').innerHTML = 'I hope your day was nice.!';}


console.log(time);
}

  console.log(greetingStatement);
