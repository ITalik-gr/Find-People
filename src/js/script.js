
window.onload = function() {
  let preolader = document.querySelector('.preloader');
  preolader.style.display = 'none';
}


var trigger = document.getElementById('toggle');
var box = document.getElementById('menu');

toggle.addEventListener('click', function() {
  box.classList.toggle('active');
});

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
    return false;
});