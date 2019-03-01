// function for gedagzeggen klok lezer.
function greetingStatement() {
  var myDate = new Date();
  var h = today.getHours();
  var txt = document.getElementById('fases');

  if (h < 12)
    txt =  'Good morning Martians!';
  if (h >= 12 && h <= 17)
    txt = 'Good afternoon Martians!';
  else if (h >= 17 && h <= 24)
    txt = 'Good evening Martians!';

  document.getElementById('fases').innerHTML = txt;
}
