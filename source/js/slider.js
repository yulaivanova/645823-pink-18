"use strict";

(function () {

var slides = document.querySelectorAll('.reviews__list .reviews__item');

var currentSlide = 0;

var nextSlide = function () {
  goToSlide(currentSlide+1);
}

var previousSlide = function () {
  goToSlide(currentSlide-1);
}

var goToSlide = function (n) {
    slides[currentSlide].className = 'reviews__item';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'reviews__item reviews__item--active';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.addEventListener('click', function() {
    nextSlide();
});

previous.addEventListener('click', function(){
    previousSlide();
});

})();

