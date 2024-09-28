document.querySelectorAll('.circle').forEach(function(circle) {
  var progress = circle.getAttribute('data-progress');
  circle.style.setProperty('--progress', progress);
});