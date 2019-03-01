// function for gedagzeggen klok lezer.
function greetingStatement() {
  var myDate = new Date();
  var h = today.getHours();

  //var txt = ''; //leeg tekst veld om later te veranderen

  if (h < 12)
    document.getElementById('fases').innerText = 'Goodmorning Martians!';
  if (h >= 12 && h <= 17)
    document.getElementById('fases').innerText = 'Good afternoon Martians!';
  else if (h >= 17 && h <= 24)
    document.getElementById('fases').innerText = 'Good evening Martians!';

}
