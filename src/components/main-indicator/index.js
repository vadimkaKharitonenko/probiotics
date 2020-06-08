import './index.css';
import $ from 'jquery';

let scrollIsBlocked = false;

function setMainSlide() {
  $('.js-main-indicator .main-indicator__dot').removeClass('active');
  $(this).addClass('active');
  scrollToSlide($(this).data('value'));
}

function animateSlideContent(slide) {
  const leftSide = Array.from(slide.querySelectorAll('.fadeInLeft'));
  const rightSide = Array.from(slide.querySelectorAll('.fadeInRight'));

  leftSide.concat(rightSide).forEach(node => {
    let className = 'fadeInRight';

    if (!node.classList) return;

    if (node.classList.contains('fadeInLeft')) {
      className = 'fadeInLeft';
    }

    node.classList.remove(className);
    setTimeout(() => {
      node.classList.add(className);
    }, 100);
  });
}

function scrollToSlide(index) {
  if (!$('#main-sections').children()[index] || !$('.js-main-indicator').children()[index]) return;
  const prevSlide = $('#main-sections').children()[index - 1];
  const slide = $('#main-sections').children()[index];
  const theme = $('.js-main-indicator').children()[index].getAttribute('data-theme');

  if (prevSlide) {
    $(prevSlide).css('position', 'sticky');
    $(prevSlide).css('top', 0);
    $(prevSlide).css('z-index', index);

    $(slide).css('position', 'relative');
    $(slide).css('z-index', index);
  } else {
    $(slide).css('position', 'relative');
    $(slide).css('z-index', index);
  }

  animateSlideContent(slide);

  theme ?
    $('.js-main-indicator').addClass('-theme-blue') :
    $('.js-main-indicator').removeClass('-theme-blue');

  if (slide) {
    const offset = $(slide).offset();
    $([document.documentElement, document.body]).animate({
      scrollTop: offset.top
    }, 500);

    $('.js-main-indicator .main-indicator__dot').removeClass('active');
    $('.js-main-indicator').children()[index].classList.add('active');
  }
}

function handler(e) {
  if (scrollIsBlocked) {
    e.preventDefault();
    document.body.style.overflow = 'hidden';
    return;
  }
  if (document.documentElement.clientWidth <= 768) return;
  scrollIsBlocked = true;

  const slides = document.querySelector('#main-sections');
  if (!slides) return;

  const slideHeight =
    document.documentElement.clientHeight /
    (slides.childElementCount - 1);
  const slideIndex = Math.round(document.body.scrollTop / Math.round(slideHeight));

  if (e.wheelDelta >= 0) {
    scrollToSlide(slideIndex - 1);
  } else {
    scrollToSlide(slideIndex + 1);
  }

  setTimeout(() => {
    scrollIsBlocked = false;
  }, 1500);
}

$(function () {
  if (document.querySelector('.js-main-indicator')) {
    $(document).delegate('.js-main-indicator .main-indicator__dot',
      'click', setMainSlide);

    if (document.documentElement.clientWidth >= 980) {
      document.addEventListener('mousewheel', handler, {passive: false});
      document.addEventListener('DOMMouseScroll', handler, {passive: false});
      document.addEventListener('keydown', function(e) {
        if (e.which === 35) {
          window.scrollTo(0, document.body.scrollHeight);
        }

        if (e.which === 36) {
          window.scrollTo(0, 0);
        }
      });
    }
  }
});



