import './index.css';
import $ from 'jquery';

function setMainSlide() {
  $('.js-main-indicator .main-indicator__dot').removeClass('active');
  $(this).addClass('active');
  scrollToSlide($(this).data('value'));
}

function scrollToSlide(index) {
  const slide = $('#main-sections').children()[index];
  const theme = $('.js-main-indicator').children()[index].getAttribute('data-theme');

  theme ?
    $('.js-main-indicator').addClass('-theme-blue') :
    $('.js-main-indicator').removeClass('-theme-blue');

  if (slide) {
    const offset = $(slide).offset();
    $([document.documentElement, document.body]).animate({
      scrollTop: offset.top
    }, 300);

    $('.js-main-indicator .main-indicator__dot').removeClass('active');
    $('.js-main-indicator').children()[index].classList.add('active');
  }
}

$(function () {
  $(document).delegate('.js-main-indicator .main-indicator__dot', 'click', setMainSlide);

  $(window).bind('mousewheel', function (event) {
    const slides = document.querySelector('#main-sections');
    if (!slides) return;
    const slideHeight = 
      document.documentElement.clientHeight / 
      (slides.childElementCount - 1);
    const slideIndex = Math.round(document.body.scrollTop / Math.round(slideHeight));

    if (event.originalEvent.wheelDelta >= 0) {
      scrollToSlide(slideIndex - 1);
    } else {
      scrollToSlide(slideIndex + 1);
    }
  });
});



