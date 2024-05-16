const button = document.getElementById('myButton');

button.addEventListener('dblclick', function() {
  alert('You just double-clicked there!');
});

button.addEventListener('click', function() {
  alert('You just clicked there!');
});

button.addEventListener('mouseenter', function() {
  alert('You just moved in!');
});

button.addEventListener('mouseleave', function() {
  alert('You just moved out!');
});