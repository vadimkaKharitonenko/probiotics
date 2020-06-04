import './index.css';
import $ from 'jquery';

$(function() {
  const isMobile = document.documentElement.clientWidth <= 767;

  if (isMobile) {
    $('.js-partners-items').slick({arrows: false});
  }

  $('.js-partners-prev').on('click', function() {
    const slider = $(this).closest('.partners__controls').prev();
    $(slider).slick('slickPrev');
  });

  $('.js-partners-next').on('click', function() {
    const slider = $(this).closest('.partners__controls').prev();
    $(slider).slick('slickNext');
  });

});