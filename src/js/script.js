
window.onload = function() {
  let preolader = document.querySelector('.preloader');
  preolader.style.display = 'none';
}


var trigger = document.getElementById('toggle');
var box = document.getElementById('menu');
var elements = document.querySelectorAll('ul > li');

toggle.addEventListener('click', function() {
  box.classList.toggle('active');
});

// elements.addEventListener('click', function() {
//   box.style.opacity = '0';
// });



var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
    return false;
});

console.log(elements);